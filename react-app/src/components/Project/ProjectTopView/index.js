import { useEffect, useState } from 'react'
import styles from './ProjectTopView.module.css'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'

function ProjectTopView({project, numberOfBackers, categories}){
  const history = useHistory();
  const [countries, setCountries] = useState([])
  // const [stateDeadline, setStateDeadline] = useState('stateDeadline')
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    (async () => {
      const countryRes = await fetch(`/api/countries`);
      const countriesResponse = await countryRes.json()
      setCountries(countriesResponse.countries)
    })();
  }, [])

  const currentFundingFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  const calculateProgressLimit = (project) => {
    const percentage = (project.current_funding / project.funding_goal) * 100;
    if (percentage > 100) {
      return '100%';
    }
    return `${percentage.toFixed()}%`;
  }

  const daysToGo = (Math.floor((new Date(project.created_at).getTime() + project.campaign_duration*86400000 - new Date().getTime())/86400000)).toString()
  // const deadline = new Date(
  //   (new Date(project.created_at).getTime() + project.campaign_duration*86400000)
  //   ).toString()

  const formatDeadline = () => {
    let newOldDeadline = 'its concluding date'

    if (project.campaign_duration){
      const oldDeadline = (new Date(project.created_at).getTime() + project.campaign_duration*86400000)
      const newOldDeadline = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
      }).format(oldDeadline)

      console.log(newOldDeadline);
    }

    return newOldDeadline
  }

  // useEffect(() => {
  //   if (project.campaign_duration){

  //     const oldDeadline = (new Date(project.created_at).getTime() + project.campaign_duration*86400000)
  //     const newOldDeadline = new Intl.DateTimeFormat('en-US', {
  //       weekday: 'short',
  //       day: 'numeric',
  //       month: 'long',
  //       year: 'numeric',
  //       hour: 'numeric',
  //       minute: '2-digit',
  //       timeZoneName: 'short'
  //     }).format(oldDeadline)

  //     setStateDeadline(newOldDeadline)
  //   } else {
  //     setStateDeadline('newStateDeadline')
  //   }

  // },[])

  return (
    <div className={styles.allProjectTopViewContentWrapper}>
      <div className={styles.allProjectTopViewContent}>
        <div className={styles.headerWrapper}>
          <div className={styles.titleDiv}>{project.title?.toUpperCase()}</div>
          <div className={styles.subTitleDiv}>{project.sub_title}</div>
        </div>
        <div className={styles.topFlexContainer}>
          <div className={styles.mediaShowcaseContainer}>
            <div className={styles.mediaShowcaseWrapper}>
              <div className={styles.mediaShowcase}>
                <img src={project?.project_image_url} className={styles.image} alt='the media showcase for this project' />
              </div>
            </div>
            <div className={styles.belowShowCaseDiv}>
              {/* <div>
                <span className={styles.belowShowCaseIcon}></span>
                <span className={styles.belowShowCaseText}>Project we love</span>
              </div> */}
              <div>
                <span className={styles.belowShowCaseIcon}><i className="far fa-compass"></i></span>
                <span className={styles.belowShowCaseText}> {categories[project.category_id]?.name}</span>
              </div>
              <div>
                <span className={styles.belowShowCaseIcon}></span>
                <span className={styles.belowShowCaseText}>{countries[project.country_id]?.name}</span>
              </div>
            </div>
          </div>
          <div className={styles.projectInfoWrapper}>
            <div className={styles.projectInfo}>
              <section>
                <div className={styles.projectInfoFlexColumn}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progress}
                      style={{ width: `${project && calculateProgressLimit(project)}` }}
                    >
                    </div>
                  </div>
                  <div className={styles.projectInfoFlexColumnRow}>
                    <div className={styles.currentFunding}>{currentFundingFormatter.format(project.current_funding)}</div>
                    <div className={styles.subtext}>pledged of {currentFundingFormatter.format(project.funding_goal)} goal</div>
                  </div>
                  <div className={styles.projectInfoFlexColumnRow}>
                    <div className={styles.bigGrey}>{numberOfBackers}</div>
                    <div className={styles.subtext}>backers</div>
                  </div>
                  <div className={styles.projectInfoFlexColumnRow}>
                    {/* <div className={styles.bigGrey}>****</div> */}
                    {/* <div className={styles.bigGrey}>{project.created_at}</div>
                    <div className={styles.bigGrey}>{new Date().toString()}</div> */}
                    {/* <div className={styles.bigGrey}>{daysToGo}</div> */}
                    <div className={styles.bigGrey}>{project.campaign_duration}</div>
                    <div className={styles.subtext}>days to go</div>
                  </div>
                </div>

                <a href='#backings'>
                  <button className={styles.btn}>Back this project</button>
                </a>
                {/* {((project.user_id === user.id) && <button className={styles.btn}>Back this project</button>)} */}
                {/* <div className={styles.allOrNothing}>All or nothing. This project will only be funded if it reaches its goal by {deadline}.</div> */}
                <div className={styles.allOrNothing}>All or nothing. This project will only be funded if it reaches its goal by {formatDeadline()}.</div>
                {/* <div className={styles.allOrNothing}>All or nothing. This project will only be funded if it reaches its goal by {stateDeadline}.</div> */}
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
