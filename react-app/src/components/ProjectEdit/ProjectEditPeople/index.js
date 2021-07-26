import styles from '../ProjectEdit.module.css'
import peopleStyles from './ProjectEditPeople.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import SmallUserImage from '../../User/SmallUserImage';

function ProjectEditPeople() {
  const user = useSelector(state => state.session.user)

  return (
    <div className={peopleStyles.pageContainer}>
      <div>
        <div className={peopleStyles.title}>Introduce yourself</div>
        <div className={peopleStyles.subTitle}>Give backers an idea of who you are, and add collaborators if you work with a team.</div>
      </div>
      <div className={peopleStyles.contentContainer}>
        <div className={peopleStyles.profileContainer}>
          <div className={peopleStyles.profileInfo}>
            <div className={peopleStyles.mainInputHeader}>Your profile</div>
            <div className={peopleStyles.mainInputSubHeader}>This will appear on your project page and must include your name, photo, and biography.</div>
          </div>
          <div className={peopleStyles.profileRectangle}>
            <SmallUserImage />
            <div>
              <div className={peopleStyles.userNameDiv}>{user.username}</div>
              <div className={peopleStyles.userNameDiv}>Project creator</div>
            </div>
            <div>
              <NavLink
                to={`/users/${user.id}`}
              >
                <button
                  className={peopleStyles.button}
                >Complete your profile</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ProjectEditPeople
