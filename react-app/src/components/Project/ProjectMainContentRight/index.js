import ProjectBuyReward from '../ProjectBuyReward'
import styles from './ProjectMainContentRight.module.css'

function ProjectMainContentRight({ addABacking, amount, setAmount, project }) {
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
      <ProjectBuyReward />
    </div>
  )
}

export default ProjectMainContentRight
