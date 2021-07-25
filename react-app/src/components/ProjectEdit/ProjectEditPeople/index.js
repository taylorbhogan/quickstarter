import styles from '../ProjectEdit.module.css'
import peopleStyles from './ProjectEditPeople.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'


function ProjectEditPeople() {
  const user = useSelector(state => state.session.user)

  return (
    <div>
      <div>
        <div className={peopleStyles.title}>Introduce yourself</div>
        <div className={peopleStyles.subTitle}>Give backers an idea of who you are, and add collaborators if you work with a team.</div>
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
