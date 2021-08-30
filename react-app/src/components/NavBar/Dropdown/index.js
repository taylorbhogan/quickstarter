import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, NavLink } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import styles from './Dropdown.module.css'
import DropdownProjectLink from './DropdownProjectLink';


function Dropdown() {
  const history = useHistory();
  const [backings, setBackings] = useState([])
  const dispatch = useDispatch()


  const user = useSelector(state => state.session.user)
  const userId = user.id
  const [userProjects, setUserProjects] = useState(user.projects)
  // const userProjects = user.projects
  // console.log('userProjects',userProjects)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const backingsResponse = await fetch(`/api/backings/users/${userId}`)
      let quickFixProjectFetch = await fetch('api/projects')
      let res = await quickFixProjectFetch.json()
      setUserProjects(res.projects.filter(project => project.user_id === userId))
      const backingsData = await backingsResponse.json();
      setBackings(backingsData.user_backed_projects)
    })();
  }, [userId]);


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
            {backings.map((project) => <DropdownProjectLink key={project.id} project={project} />)}
          </div>
        </section>
        <section className={styles.projectsColumn}>
          <h2 className={styles.createdProjectsText}>CREATED PROJECTS</h2>
          <div className={styles.createdProjectsList}>
            {userProjects.map((project) => <DropdownProjectLink key={project.id} project={project} createdProject={true} />)}
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
