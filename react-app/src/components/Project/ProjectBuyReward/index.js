import styles from "./ProjectBuyReward.module.css";
import { useState } from "react";
import { createBacking } from "../../../store/backing";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
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
    let date = new Date(dateObj);

    let [month, year] = [date.getMonth(), date.getFullYear()];
    if (month < 10) {
      return `${month + 1}-${year}`;
    }
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
      // const createdBacking = data.newBacking
      setRewardAmount(0);

      // console.log('1234----responseFromStore-------->', data.newBacking);
      // if (createdBacking){
      //   do stuff
      // }
    }
  };

  return (
    <div>
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
              <div className={styles.littleHeader}>SHIPS TO</div>
              <div className={styles.shipsTo}>Anywhere in the world</div>
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
