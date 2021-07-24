import { useEffect, useState } from 'react'

import ProjectBuyReward from '../ProjectBuyReward'
import styles from './ProjectMainContentRight.module.css'

function ProjectMainContentRight({ addABacking, amount, user, projectId, setAmount, project }) {
  const [rewards, setRewards] = useState([])
  const [activeRewards, setActiveRewards] = useState([])
  const [expiredRewards, setExpiredRewards] = useState([])
  const [futureRewards, setFutureRewards] = useState([])
  const [soldOutRewards, setSoldOutRewards] = useState([])




  useEffect(() => {
    (async () => {
      const rewardsResponse = await fetch(`/api/projects/${project.id}/rewards`)
      const rewardsData = await rewardsResponse.json()
      console.log('rewardsData------------------>', rewardsData);
      setRewards(rewardsData.rewards)
      setActiveRewards(rewardsData.activeRewards)
      setExpiredRewards(rewardsData.expiredRewards)
      setFutureRewards(rewardsData.futureRewards)
      setSoldOutRewards(rewardsData.soldOutRewards)
    })();
  }, [project.id])

  return (
    <div className={styles.outside}>
      <div>
        <div className={styles.support}>Support</div>
        <form className={styles.noRewardForm}>
          <div className={styles.flexbox}>
            <div className={styles.pledge}>Pledge without a reward</div>
            <div className={styles.inputDiv}>
              <div>
                <div className={styles.dollahBillsRapper}>
                  <div className={styles.dollahBills}>$</div>
                </div>
                <input
                  className={styles.amountInput}
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={styles.believe}>
              <div className={styles.backIt}>Back it because you believe in it.</div>
              <div className={styles.support}>Support the project for no reward, just because it speaks to you.</div>
            </div>
            <button
              type='submit'
              className={styles.btn}
              // id={10101}
              // id='hello'
              // DEFAULT BACKING DOES NOT GET AN ID; REWARDS DO
              onClick={addABacking}
            >Continue</button>
          </div>
        </form>
      </div>
      {(activeRewards.map(reward => (
        <ProjectBuyReward
          stylesFromParent={styles}
          reward={reward}
          addABacking={addABacking}
          key={reward.id}
          setAmount={setAmount}
          user={user}
          projectId={projectId}
          amount={amount}
        />)))}
      {(futureRewards.map(reward => (
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
        />)))}
      {(expiredRewards.map(reward => (
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
        />)))}
      {(soldOutRewards.map(reward => (
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
        />)))}
    </div>
  )
}

export default ProjectMainContentRight
