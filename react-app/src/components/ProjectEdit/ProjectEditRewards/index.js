import styles from '../ProjectEdit.module.css'


function ProjectEditRewards() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.editPageHeader}>Add your rewards</h1>
        <h2>Offer simple, meaningful ways to bring backers closer to your project and celebrate it coming to life.</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.rewardsContainer}>
          <nav className={styles.rewardsMenu}>
            <div className={styles.rewardsTiersDiv}>
              <div className={styles.presentIcon}></div>
              <div className={styles.rewardsMenuHeader}>Reward tiers</div>
            </div>
          </nav>
        <div className={styles.rewardsContainerTopContent}>
          <div className={styles.textDivs}>
            <div>Most creators offer 3-10 rewards, which can be physical items or special experiences. Make sure to set reasonable backer expectations.</div>
            <div className={styles.learnMore}>Learn about creating and managing rewards</div>
            <div className={styles.infoDiv}>
              <div>Add a reward</div>
              <div>Offer tangible or intangible things that bring backers closer to your project</div>
            </div>
          </div>
          <div className={styles.newRewardButtonDiv}>
            <button className={styles.newRewardButton}>+ New reward</button>
          </div>
        </div>
        <div className={styles.rewardsContainerBottomContent}>
          <div className={styles.formDiv}>
            <form>
              <div>
                <label>Title</label>
                <input
                  placeholder={'Signed limited-edition'}
                ></input>
              </div>
              <div>
                <label>Amount</label>
                <input></input>
              </div>
              <div>
                <label>Description</label>
                <textarea
                  placeholder={'Get an early copy - hot off the presses!'}
                ></textarea>
              </div>
              <div>
                <label>Estimated delivery</label>
                <p>Give yourself plenty of time. It's better to deliver to backers ahead of schedule than behind.</p>
                <div>Date inputs go here</div>
              </div>
              <div>
                <label>Shipping</label>
              </div>
              <div>
                <label>Project quantity</label>
              </div>
              <div>
                <label>Time limit</label>
              </div>
              <button className={styles.saveRewardButton}>Save reward</button>
              <button className={styles.cancelRewardButton}>Cancel</button>
            </form>
          </div>
          <div className={styles.previewDiv}>
            <div>Reward preview</div>
            <div>Get a glimpse of how this reward will look on your project page.</div>
            <div className={styles.rewardPreviewRectangleContainer}>
              <div className={styles.rewardAmountPreview}>Pledge or more</div>
              <div className={styles.rewardsTitlePreview}></div>
              <div className={styles.rewardsDescriptionPreview}></div>
              <div className={styles.rewardsPreviewHeader}>ESTIMATED DELIVERY</div>
              <div className={`${styles.rewardsEstimatedDeliveryPreview} ${styles.rewardsPreviewDisplay}`}></div>
              <div className={styles.rewardsPreviewHeader}>SHIPS TO</div>
              <div className={`${styles.rewardsShipsToPreview} ${styles.rewardsPreviewDisplay}`}></div>
              <div className={styles.rewardsPreviewHeader}>REWARD QUANTITY</div>
              <div className={`${styles.rewardsQuantityPreview} ${styles.rewardsPreviewDisplay}`}></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectEditRewards
