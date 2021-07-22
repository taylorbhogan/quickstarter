import { NavLink } from 'react-router-dom';
import styles from './ProjectCreateForm.module.css'

function Form2({ changeStageButton, subTitle, setSubTitle }) {
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <div></div>
          <NavLink to='/' exact className={styles.logo}>Placeholder</NavLink>
          <div className={styles.userIcon}></div>
        </div>
        <div className={styles.pageNumber}>2 of 3</div>
        <form className={styles.form}>
          <div className={styles.formContents}>
            <h2>Describe what you’ll be creating.</h2>
            <h3>And don’t worry, you can edit this later, too.</h3>
            <textarea
              type="text"
              className={styles.textarea}
              placeholder={'An album of songs based on Pablo Neruda poems.'}
              onChange={(e) => setSubTitle(e.target.value)}
              value={subTitle}
            />
          </div>
          <div
            className={styles.characterCount}
          >
            <span>{subTitle.length}</span>
            <span>/135</span>
          </div>
          <div className={styles.btnContainer}>
            <button
              // this id is used in changeStageButton in ProjectCreateForm/index.js. to change it, change that function's logic
              id={'back'}
              className={styles.back}
              onClick={changeStageButton}
            > <span><i className="fas fa-long-arrow-alt-left"></i></span> Category</button>
            <button
              // this id is used in changeStageButton in ProjectCreateForm/index.js. to change it, change that function's logic
              className={styles.next}
              id={'next'}
              onClick={changeStageButton}> Next: Location</button>
          </div>
          <div
            className={styles.littleTextHolder}
          >
            <div
              className={styles.littleText}
            >
              You're required to provide your location, age, national ID, banking and tax information, email, and mailing address to launch a project. By doing so, you also certify that the details you provide are complete and correct. This information is necessary to prevent fraud, comply with the law, and to deliver funds if you reach your funding goal.
            </div>
            <div
              className={styles.littleText}
            >
              Please note: Your ability to edit, hide, or delete a project is limited after you launch a project.
            </div>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Form2
