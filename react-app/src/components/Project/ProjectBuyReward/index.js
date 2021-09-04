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
  // this object is just an example
  // reward = {
  //   price: '$10',
  //   title: 'Smokey Skull w nostrils',
  //   description: 'Want to impress your frinds or customers? This is the one you want! Get just enough smoke in your glass for flavor and watch as the skull exhales.',
  //   id: 1,
  //   estimated_delivery: 'Oct 2021'
  // }

  // console.log(amount, user, projectId)

  // const handleOnClick = async e => {
  //   e.preventDefault()
  //   setRewardAmount(e.target.value)
  //   setAmount(rewardAmount)

  // }
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

    // setRewardAmount(e.target.value)
    // setAmount(rewardAmount)

    if (rewardAmount <= 0) {
      setRewardAmount(0);
    } else {
      // console.log("PROJ ID", projectId)
      // console.log("PROJ ID +", +projectId)
      const backing = {
        amount: +rewardAmount,
        user_id: user.id,
        project_id: +projectId,
        // DEFAULT BACKING DOES NOT GET AN ID; WE USE THE ID FROM REAL REWARDS TO ADD THEM TO THE DB
        reward_id: e.target.id === "" ? null : +e.target.id,
      };

      // console.log('***************', backing)
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

      // console.log('1234----responseFromStore-------->', data.newBacking);
      // if (createdBacking){
      //   do stuff
      // }
    }
  };

  return (
    <div className={styles.container}>
      {disable && (
        // <div className={styles.overlay}>
        //   <div className={styles.overlayText}>Select this reward</div>
        // </div>
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
              {/* <div className={styles.estimatedDelivery}>{reward.estimated_delivery}</div> */}
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
                //com
                value={rewardAmount}
                onChange={(e) => setRewardAmount(e.target.value)}
              // onChange={(e) => setRewardAmount(e.target.value)}
              // onChange={(e) => setAmount(rewardAmount)}
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
            // onClick={handleOnClick}
            // onClick={addABacking}
            // onChange={addABacking}
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
