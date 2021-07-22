import styles from '../ProjectEdit.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'


function ProjectEditPeople() {
  const user = useSelector(state => state.session.user)

  return (
    <div>
      <div>
        <h1>Introduce yourself</h1>
        <h2>Give backers an idea of who you are, and add collaborators if you work with a team.</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.profileInfo}>
            <div>Your profile</div>
            <div>This will appear on your project page and must include your name, photo, and biography.</div>
          </div>
          <div className={styles.profileRectangle}>
            <div>
              <div className={styles.userNameDiv}></div>
              <div className={styles.userNameDiv}>Project creator</div>
            </div>
            <div>
              <NavLink
                to={`/users/${user.id}`}
              >
                <button>Complete your profile</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProjectEditPeople
