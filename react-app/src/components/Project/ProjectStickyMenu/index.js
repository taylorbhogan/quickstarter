import styles from "./ProjectStickyMenu.module.css";
import { NavLink } from "react-router-dom";

function ProjectStickyMenu({ user, project }) {
  return (
    <div className={styles.menuWrapper}>
      <div id="backings" className={styles.flexBox}>
        <div className={styles.linkContainer}>
          <div className={styles.stickyMenuLink}>Campaign</div>
          <div className={styles.stickyMenuLink}>FAQ</div>
          <div className={styles.stickyMenuLink}>Updates</div>
          <div className={styles.stickyMenuLink}>Comments</div>
          <div className={styles.stickyMenuLink}>Community</div>
        </div>
        {project.user_id === user.id && (
          <NavLink to={`/projects/${project.id}/edit`} exact={true}>
            <button className={styles.btn} onClick={() => {
              window.scroll(0, 0)
            }}>Edit project</button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default ProjectStickyMenu;
