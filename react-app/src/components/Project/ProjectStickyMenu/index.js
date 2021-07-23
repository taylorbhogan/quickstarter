import styles from './ProjectStickyMenu.module.css'

function ProjectStickyMenu(){
  return(
    <div>
      <div className={styles.flexBox}>
        <div className={styles.navComponent}>
          <div>Campaign</div>
          {/* <div>FAQ</div>
          <div>Updates</div>
          <div>Comments</div>
          <div>Community</div> */}
        </div>
        <button>Back this project</button>
      </div>
    </div>
  )
}

export default ProjectStickyMenu
