import styles from './DropdownProjectLink.module.css'
import { NavLink } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage';

function DropdownProjectLink({project, createdProject}) {

  return (
    <div className={styles.projectContainer}>
      {(
        project?.project_image_url
        ?
        <img src={project?.project_image_url} className={styles.image} alt='project showcase'/>
        :
        <PlaceholderImage />
      )}
      <NavLink
        to={`/projects/${project?.id}`}
        className={styles.text}>
        {project?.title ? project.title : 'Your new project'}
      </NavLink>
    </div>
  )
}

export default DropdownProjectLink
