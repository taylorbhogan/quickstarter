import { useSelector } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import styles from './Dropdown.module.css'
import DropdownProjectLink from './DropdownProjectLink';

function Dropdown() {
  const history = useHistory();

  const user = useSelector(state => state.session.user)
  const userProjects = user.projects
  console.log('userProjects',userProjects)

  const newProjectTime = () => {
    history.push('/learn');
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles.topFlex}>
        <section className={styles.yourAccount}>
          <h2 className={styles.yourAccountText}>YOUR ACCOUNT</h2>
          <div className={styles.accountLinks}>
            <div>
              <NavLink
                className={styles.accountLink}
                to={`/users/${user.id}/saved`}
              >Saved projects</NavLink>
            </div>
            <div>
              <NavLink
                className={styles.accountLink}
                to={`/users/${user.id}/recommended`}
              >Recommended for you</NavLink>
            </div>
            <div>
              <NavLink
                className={styles.accountLink}
                to={`/users/${user.id}`}
              >Profile</NavLink>
            </div>
          </div>
        </section>
        <section className={styles.projectsColumn}>
            <h2 className={styles.createdProjectsText}>BACKED PROJECTS</h2>
            <div className={styles.createdProjectsList}>
{/* ************************************************************************************************ */}
{/* ************************************************************************************************ */}
{/* ************************************************************************************************ */}
            {/* WHEN YOU REPLACE THESE WITH REAL LINKS */}
              <DropdownProjectLink />
              <DropdownProjectLink />
            {/* you should be able to remove the ? s from the NavLink in DropdownProjectLink */}
            </div>
        </section>
        <section className={styles.projectsColumn}>
            <h2 className={styles.createdProjectsText}>CREATED PROJECTS</h2>
            <div className={styles.createdProjectsList}>
            {userProjects.map((project) => <DropdownProjectLink key={project.id} project={project} />)}
              {/* <DropdownProjectLink />
              <DropdownProjectLink />
              <DropdownProjectLink /> */}
            </div>
            <button
              className={styles.newDivWrapper}
              onClick={newProjectTime}
            >
              <div className={styles.newDiv}>
                <div className={styles.plus}>+</div>
                <div className={styles.new}>New</div>
              </div>
            </button>
        </section>
      </div>
      <section className={styles.bottom}>
        <LogoutButton />
      </section>
    </div>
  )
}

export default Dropdown
