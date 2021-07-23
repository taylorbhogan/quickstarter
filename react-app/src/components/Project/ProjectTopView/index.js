import styles from './ProjectTopView.module.css'

function ProjectTopView({project, numberOfBackers, categories}){
  return (
    <div className={styles.allProjectTopViewContentWrapper}>
    <div className={styles.allProjectTopViewContent}>
        <div>
          <h1>{project.title}</h1>
          <h2>{project.sub_title}</h2>
        </div>
          <div className={styles.topFlexContainer}>
            <div className={styles.mediaShowcaseContainer}>
              <div className={styles.mediaShowcaseWrapper}>
                <div className={styles.mediaShowcase}></div>
              </div>
              <div>
                <div>I don't know what this part is</div>
                <div>{categories[project.category_id]?.name}</div>
                <div>{project.country}</div>
              </div>
            </div>
            <div className={styles.projectInfoWrapper}>
              <div className={styles.projectInfo}>
                <section>
                  <div className={styles.projectInfoFlexColumn}>
                    <div>
                      <div className={styles.currentFunding}>{project.current_funding}</div>
                      <div className={styles.subtext}>pledged of {project.funding_goal} goal</div>
                    </div>
                    <div>
                      <div>{numberOfBackers}</div>
                      <div className={styles.subtext}>backers</div>
                    </div>
                    <div>
                      <div>****</div>
                      <div className={styles.subtext}>days to go</div>
                    </div>
                  </div>
                  <button>Back this project</button>
                  <div>All or nothing. This project will only be funded if it reaches its goal by **insert deadline here**.</div>
                </section>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectTopView
