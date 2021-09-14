import styles from "./ProjectBuyReward.module.css";
import { useState } from "react";
import { createBacking } from "../../../store/backing";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ProjectBuyReward({
  addABacking,
  amount,
  disable,
  user,
  projectId,
  reward,
  project,
  setAmount,
  stylesFromParent,
}) {
  const [rewardAmount, setRewardAmount] = useState(0);
  const [backingError, setBackingError] = useState([])
  const dispatch = useDispatch();
  const history = useHistory();

  const formatDate = (dateObj) => {
    let readyDate = new Date(dateObj);
    const date = new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(readyDate);

    return date;
  };

  const addARewardBacking = async (e) => {
    e.preventDefault();

    if (rewardAmount <= 0) {
      setBackingError(['Please enter a positive number! :)'])
      setRewardAmount(0);
      setTimeout(() => {
        setBackingError([])
      }, 5000)
    } else {
      const backing = {
        amount: +rewardAmount,
        user_id: user.id,
        project_id: +projectId,
        // default backing does not get an id; we use the id from real rewards to add them to the db
        reward_id: e.target.id === "" ? null : +e.target.id,
      };

      const data = await dispatch(createBacking(backing));
      if (data.Backing_failed) {
        setBackingError([data.Backing_failed])

        setRewardAmount(0);
        setTimeout(() => {
          setBackingError([])
        }, 10000)

      } else if (data.newBacking) {
        history.go(0);
        setRewardAmount(0);
      }
    }
  };

  return (
    <div className={styles.container}>
      {disable && (
        <div className={styles.overlay}>
          <div className={styles.overlayText}>Not Available or Expired</div>
        </div>
      )}
      <form className={styles.rewardForm}>
        <div className={styles.flexboxColumn}>
          <div className={styles.price}>Pledge {reward.price} or more</div>
          <div className={styles.title}>{reward.title}</div>
          <div className={styles.description}>{reward.description}</div>
          <div className={styles.flexbox}>
            <div>
              <div className={styles.littleHeader}>ESTIMATED DELIVERY</div>
              <div className={styles.estimatedDelivery}>
                {formatDate(reward.estimated_delivery)}
              </div>
            </div>
            <div>
              {/* <div className={styles.littleHeader}>SHIPS TO</div>
              <div className={styles.shipsTo}>Anywhere in the world</div> */}
              <div className={styles.littleHeader}>QUANTITY</div>
              <div className={styles.shipsTo}>{reward.quantity}</div>
            </div>
          </div>
        </div>
        <div className={stylesFromParent.inputDiv}>
          {!disable && (
            <div>
              <div className={stylesFromParent.dollahBillsRapper}>
                <div className={stylesFromParent.dollahBills}>$</div>
              </div>
              <input
                className={stylesFromParent.amountInput}
                type="number"
                value={rewardAmount}
                onChange={(e) => setRewardAmount(e.target.value)}
                onFocus={() => setBackingError([])}
              ></input>
            </div>
          )}
        </div>
        {backingError && backingError.map((error, ind) => (
          <div style={{ color: "red", marginTop: '5px', marginBottom: '5px', display: 'flex', justifyContent: 'center' }} key={ind}>
            {error}
          </div>
        ))}
        {!disable && (
          <button
            type="submit"
            className={styles.btn}
            id={reward.id}
            onClick={addARewardBacking}
          >
            Continue
          </button>
        )}
      </form>
    </div>
  );
}

export default ProjectBuyReward;
