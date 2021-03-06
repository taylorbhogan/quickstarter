import { useEffect, useState } from "react";

import ProjectBuyReward from "../ProjectBuyReward";
import styles from "./ProjectMainContentRight.module.css";

function ProjectMainContentRight({
  addABacking,
  amount,
  user,
  projectId,
  setAmount,
  project,
}) {
  // const [rewards, setRewards] = useState([]);
  const [activeRewards, setActiveRewards] = useState([]);
  const [expiredRewards, setExpiredRewards] = useState([]);
  const [futureRewards, setFutureRewards] = useState([]);
  const [soldOutRewards, setSoldOutRewards] = useState([]);

  useEffect(() => {
    (async () => {
      const rewardsResponse = await fetch(
        `/api/projects/${project.id}/rewards`
      );
      const rewardsData = await rewardsResponse.json();
      // setRewards(rewardsData.rewards);
      setActiveRewards(rewardsData.activeRewards);
      setExpiredRewards(rewardsData.expiredRewards);
      setFutureRewards(rewardsData.futureRewards);
      setSoldOutRewards(rewardsData.soldOutRewards);
    })();
  }, [project.id]);

  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [inputIsHovered, setInputIsHovered] = useState(false);

  const inputStyleHandler = () => {
    const style = {};
    if (inputIsFocused) style["borderRight"] = "1px solid green";
    if (inputIsHovered) style["borderRight"] = "1px solid green";
    return style;
  };

  return (
    <div className={styles.outside}>
      <div className={styles.supportTitle}>Support</div>
      <form className={styles.noRewardForm}>
        <div className={styles.flexbox}>
          <div className={styles.pledge}>Pledge without a reward</div>
          <div className={styles.inputDiv}>
            <div>
              <div
                className={styles.dollahBillsRapper}
                style={inputStyleHandler()}
              >
                <div className={styles.dollahBills}>$</div>
              </div>
              <input
                className={styles.amountInput}
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onFocus={() => setInputIsFocused(true)}
                onBlur={() => setInputIsFocused(false)}
                onMouseEnter={() => setInputIsHovered(true)}
                onMouseLeave={() => setInputIsHovered(false)}
              ></input>
            </div>
          </div>
          <div className={styles.believe}>
            <div className={styles.backIt}>
              Back it because you believe in it.
            </div>
            <div className={styles.support}>
              Support the project for no reward, just because it speaks to you.
            </div>
          </div>
          <button
            type="submit"
            className={styles.btn}
            // id={10101}
            // id='hello'
            // DEFAULT BACKING DOES NOT GET AN ID; REWARDS DO
            onClick={addABacking}
          >
            Continue
          </button>
        </div>
      </form>
      {activeRewards?.map((reward) => (
        <ProjectBuyReward
          stylesFromParent={styles}
          reward={reward}
          addABacking={addABacking}
          key={reward.id}
          setAmount={setAmount}
          user={user}
          projectId={projectId}
          amount={amount}
        />
      ))}
      {futureRewards?.map((reward) => (
        <ProjectBuyReward
          disable={true}
          stylesFromParent={styles}
          reward={reward}
          addABacking={addABacking}
          key={reward.id}
          setAmount={setAmount}
          user={user}
          projectId={projectId}
          amount={amount}
        />
      ))}
      {expiredRewards?.map((reward) => (
        <ProjectBuyReward
          disable={true}
          stylesFromParent={styles}
          reward={reward}
          addABacking={addABacking}
          key={reward.id}
          setAmount={setAmount}
          user={user}
          projectId={projectId}
          amount={amount}
        />
      ))}
      {soldOutRewards?.map((reward) => (
        <ProjectBuyReward
          disable={true}
          stylesFromParent={styles}
          reward={reward}
          addABacking={addABacking}
          key={reward.id}
          setAmount={setAmount}
          user={user}
          projectId={projectId}
          amount={amount}
        />
      ))}
    </div>
  );
}

export default ProjectMainContentRight;
