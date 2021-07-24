import styles from './ProjectTopView.module.css'

function ProjectTopView({project, numberOfBackers, categories}){

  const currentFundingFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  return (
    <div className={styles.allProjectTopViewContentWrapper}>
    <div className={styles.allProjectTopViewContent}>
        <div className={styles.headerWrapper}>
          <h1>{project.title}</h1>
          <h2>{project.sub_title}</h2>
        </div>
        <div className={styles.topFlexContainer}>
          <div className={styles.mediaShowcaseContainer}>
            <div className={styles.mediaShowcaseWrapper}>
              <div className={styles.mediaShowcase}></div>
            </div>
            <div className={styles.belowShowCaseDiv}>
              <div>
                <span className={styles.belowShowCaseIcon}></span>
                <span className={styles.belowShowCaseText}>Project we love</span>
              </div>
              <div>
                <span className={styles.belowShowCaseIcon}><i className="far fa-compass"></i></span>
                <span className={styles.belowShowCaseText}>{categories[project.category_id]?.name}</span>
              </div>
              <div>
                <span className={styles.belowShowCaseIcon}></span>
                <span className={styles.belowShowCaseText}>{project.country}</span>
              </div>
            </div>
          </div>
          <div className={styles.projectInfoWrapper}>
            <div className={styles.projectInfo}>
              <section>
                <div className={styles.projectInfoFlexColumn}>
                  <div className={styles.progressBar}></div>
                  <div className={styles.projectInfoFlexColumnRow}>
                    <div className={styles.currentFunding}>{currentFundingFormatter.format(project.current_funding)}</div>
                    <div className={styles.subtext}>pledged of {project.funding_goal} goal</div>
                  </div>
                  <div className={styles.projectInfoFlexColumnRow}>
                    <div className={styles.bigGrey}>{numberOfBackers}</div>
                    <div className={styles.subtext}>backers</div>
                  </div>
                  <div className={styles.projectInfoFlexColumnRow}>
                    <div className={styles.bigGrey}>****</div>
                    <div className={styles.subtext}>days to go</div>
                  </div>
                </div>
                <button className={styles.btn}>Back this project</button>
                <div className={styles.allOrNothing}>All or nothing. This project will only be funded if it reaches its goal by **insert deadline here**.</div>
              </section>
          </div>
          </div>
        </div>
        <div className={styles.pinkContainer}>
          <div className={styles.pinkContainerDiv}>
            <div className={styles.pinkContainerText}>Quickstarter connects creators with backers to fund projects.</div>
          </div>
          <div className={styles.pinkContainerDiv}>
            <div className={styles.pinkContainerText}>Rewards aren’t guaranteed, but creators must regularly update backers.</div>
          </div>
          <div className={styles.pinkContainerDiv}>
            <div className={styles.pinkContainerText}>You’re only charged if the project meets its funding goal by the campaign deadline.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTopView
