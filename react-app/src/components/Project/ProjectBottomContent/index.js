import { useSelector } from 'react-redux';

import Slides from '../../ViewComponents/Slides';
import styles from './ProjectBottomContent.module.css'

function ProjectBottomContent() {
  const projects = useSelector(state => Object.values(state.projects));

  return (
    <div className={styles.projectBottomContentContainer}>
      <Slides projects={projects} title='WE ALSO RECOMMEND'/>
    </div>
  )
}

export default ProjectBottomContent;
