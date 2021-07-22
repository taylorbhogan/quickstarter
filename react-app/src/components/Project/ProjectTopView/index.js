import styles from './ProjectTopView.module.css'

function ProjectTopView({project}){
  return (
    <div className={styles.allProjectTopViewContentWrapper}>
    <div className={styles.allProjectTopViewContent}>
        <div>
          <h1>{project.title}</h1>
          <h2>{project.sub_title}</h2>
        </div>
        <div className={styles.topFlexContainer}>
          <div className={styles.mediaShowcaseContainer}>
            <div className={styles.mediaShowcase}></div>
            <div>
              <div>I don't know what this part is</div>
              <div>{project.category}</div>
              <div>{project.country}</div>
            </div>
          </div>
          <div className={styles.projectInfo}>
            <div>
              <div>{project.current_funding}</div>
              <div>pledged of {project.funding_goal} goal</div>
              <div>insert number of backers here</div>
              <div>insert number of days to go here</div>
              <button>Back this project</button>
              <div>All or nothing. This project will only be funded if it reaches its goal by **insert deadline here**.</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTopView
