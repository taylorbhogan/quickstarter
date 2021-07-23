import styles from './ProjectBottomContent.module.css'
import ProjectPreview from '../ProjectPreview'


function ProjectBottomContent() {
  return (
    <div className={styles.projectBottomContentContainer}>
      <div>
        <div>WE ALSO RECOMMEND</div>
        <div>{'Discover more >'}</div>
      </div>
      <div className={styles.projectPreviewContainer}>
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />

      </div>
    </div>
  )
}

export default ProjectBottomContent;
