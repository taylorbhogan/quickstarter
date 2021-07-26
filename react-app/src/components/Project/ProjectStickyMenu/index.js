import styles from './ProjectStickyMenu.module.css'
import { NavLink } from 'react-router-dom'


function ProjectStickyMenu({user, project}){
  return(
    <div className={styles.menuWrapper}>
      <a name='backings' />
      <div className={styles.flexBox}>
        <div className={styles.navComponent}>
          <div className={styles.linkContainer}>
            <div className={styles.stickyMenuLink}>Campaign</div>
            <div className={styles.stickyMenuLink}>FAQ</div>
            <div className={styles.stickyMenuLink}>Updates</div>
            <div className={styles.stickyMenuLink}>Comments</div>
            <div className={styles.stickyMenuLink}>Community</div>
          </div>
        </div>
        {((project.user_id === user.id) &&
          <NavLink
            to={`/projects/${project.id}/edit`} exact={true}
            >
            <button className={styles.btn}>Edit project</button>
          </NavLink>
          )}
        {/* <button className={styles.btn}>Back this project</button> */}
      </div>
    </div>
  )
}

export default ProjectStickyMenu
