import styles from './ProjectBuyReward.module.css'

function ProjectBuyReward({addABacking, reward, project}) {

  // this object is just an example
  reward = {
    price: '$10',
    title: 'Smokey Skull w nostrils',
    description: 'Want to impress your frinds or customers? This is the one you want! Get just enough smoke in your glass for flavor and watch as the skull exhales.',
    id: 1,
    estimated_delivery: 'Oct 2021'
  }

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
                <div className={styles.estimatedDelivery}>{reward.estimated_delivery}</div>
              </div>
              <div>
                <div className={styles.littleHeader}>SHIPS TO</div>
                <div className={styles.shipsTo}>Anywhere in the world</div>
              </div>
            </div>
          </div>
            <button
              type='submit'
              className={styles.btn}
              id={reward.id}
              onClick={addABacking}
              >Continue</button>
        </form>
      </div>
  )
}

export default ProjectBuyReward
