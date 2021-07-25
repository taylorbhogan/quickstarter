import styles from './DiscoverList.module.css'
import { NavLink } from 'react-router-dom'

function DiscoverList({projects}) {
  return (
    <div>
      {(projects.map((project) => (
        <li
          key={project.id}
          className={styles.navLink}
          >
          <NavLink to={`/projects/${project.id}`}>{project.title}</NavLink>
        </li>
      )))}
    </div>
  )
}

export default DiscoverList
