import styles from './ProjectBuyReward.module.css'

function ProjectBuyReward({addABacking, amount, setAmount, project}) {
  return (
      <div>
        <div className={styles.support}>Support</div>
        <form className={styles.noRewardForm}>
          <div className={styles.flexbox}>
            <div className={styles.pledge}>Pledge without a reward</div>
            <div>
            <div className={styles.inputDiv}>
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
  )
}

export default ProjectBuyReward
