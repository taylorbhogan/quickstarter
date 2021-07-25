import styles from './PageNotFound.module.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

function PageNotFound() {

  // useEffect(()=>{
  //   const randomNumber = Math.floor(Math.random() * 100)
  // },[])

  return (
    <div className={styles.bigBucket}>
      <div className={styles.left}>
        <div className={styles.logoPlaceholder}>QUICKSTARTER</div>
        <div>
          <div className={styles.header}>Back it up!</div>
          <div className={styles.blurb}>We can’t find this page, but we can show you a new creative project you can help bring to life.</div>
          <div className={styles.buttons}>
            {/* <NavLink to={`/projects/${randomNumber}`} exact={true}> */}
              <button className={styles.buttonBlack}>Take a chance</button>
            {/* </NavLink> */}
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
