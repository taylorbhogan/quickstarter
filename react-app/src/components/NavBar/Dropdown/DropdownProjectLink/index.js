import styles from './DropdownProjectLink.module.css'

function DropdownProjectLink() {
  return (
    <div className={styles.projectContainer}>
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
      <div className={styles.text}>
        Project Example
      </div>
    </div>
  )
}

export default DropdownProjectLink
