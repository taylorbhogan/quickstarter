import styles from './DropdownProjectLink.module.css'
import { NavLink } from 'react-router-dom';


function DropdownProjectLink({project}) {

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
      <NavLink
        to={`projects/${project?.id}`}
        className={styles.text}>
        {project?.title ? project.title : 'Your new project'}
      </NavLink>
    </div>
  )
}

export default DropdownProjectLink
