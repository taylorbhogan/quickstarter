import styles from './PageNotFound.module.css'
import { useHistory, NavLink } from 'react-router-dom'

function PageNotFound() {
  const history = useHistory()

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    history.push(`/projects/${randomNumber}`)
  }

  return (
    <div className={styles.bigBucket}>
      <div className={styles.left}>
        <NavLink to='/' exact={true}>
          <div className={styles.logoPlaceholder}>QUICKSTARTER</div>
        </NavLink>
        <div>
          <div className={styles.header}>Back it up!</div>
          <div className={styles.blurb}>We can’t find this page, but we can show you a new creative project you can help bring to life.</div>
          <div className={styles.buttons}>
            <button onClick={handleClick} className={styles.buttonBlack}>Take a chance</button>
            <NavLink to='/' exact={true}>
              <button className={styles.buttonWhite}>Take me home</button>
            </NavLink>
          </div>
          <div className={styles.cta}>Check our status blog for updates</div>

        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageDiv}></div>
      </div>
    </div>
  )
}

export default PageNotFound
