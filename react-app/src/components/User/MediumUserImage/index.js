import { useSelector } from 'react-redux'
import styles from './MediumUserImage.module.css'


function MediumUserImage() {
  const user = useSelector(state => state.session.user)


  return (
    <>
      {user.user_image_url
        ?
        <img
          alt='user profile'
          src={user.user_image_url}
          className={styles.userImage}
        ></img>
        :
        <div className={styles.rectangleHolderWrapper}>
          <div className={styles.rectangleHolder}>
            <div className={styles.rectRow}>
              <div className={`${styles.rect1} ${styles.rect}`}></div>
              <div className={`${styles.rect2} ${styles.rect}`}></div>
              <div className={`${styles.rect3} ${styles.rect}`}></div>
              <div className={`${styles.rect4} ${styles.rect}`}></div>
            </div>
            <div className={styles.rectRow}>
              <div className={`${styles.rect5} ${styles.rect}`}></div>
              <div className={`${styles.rect6} ${styles.rect}`}></div>
              <div className={`${styles.rect7} ${styles.rect}`}></div>
              <div className={`${styles.rect8} ${styles.rect}`}></div>
            </div>
            <div className={styles.rectRow}>
              <div className={`${styles.rect9} ${styles.rect}`}></div>
              <div className={`${styles.rect10} ${styles.rect}`}></div>
              <div className={`${styles.rect11} ${styles.rect}`}></div>
              <div className={`${styles.rect12} ${styles.rect}`}></div>
            </div>
            <div className={styles.rectRow}>
              <div className={`${styles.rect13} ${styles.rect}`}></div>
              <div className={`${styles.rect14} ${styles.rect}`}></div>
              <div className={`${styles.rect15} ${styles.rect}`}></div>
              <div className={`${styles.rect16} ${styles.rect}`}></div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default MediumUserImage
