import styles from './PlaceholderImage.module.css'


function PlaceholderImage() {

  return (
      <div className={styles.rectangleHolder}>
        <div className={styles.rectRow}>
          <div className={`${styles.rect1} ${styles.bigRect}`}></div>
          <div className={`${styles.rect2} ${styles.bigRect}`}></div>
          <div className={`${styles.rect3} ${styles.bigRect}`}></div>
        </div>
        <div className={styles.rectRow}>
          <div className={`${styles.rect4} ${styles.smallRect}`}></div>
          <div className={`${styles.rect5} ${styles.smallRect}`}></div>
          <div className={`${styles.rect6} ${styles.smallRect}`}></div>
        </div>
      </div>
  )
}

export default PlaceholderImage
