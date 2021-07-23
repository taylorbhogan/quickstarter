import styles from './ProjectMainContentCenter.module.css'

function ProjectMainContentCenter({project}){
  return(
    <div className={styles.wrapper}>
      <div className={styles.storyDiv}>
        <div>This is where we will render the Story</div>
        {/* <div>{project.story}</div> */}
        <div
          dangerouslySetInnerHTML={{__html:project.story}}
        >
        </div>
      </div>
    </div>
  )
}

export default ProjectMainContentCenter
