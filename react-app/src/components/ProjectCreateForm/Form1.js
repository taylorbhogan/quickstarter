import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown';
import styles from './ProjectCreateForm.module.css';

function Form1({ changeStageButton, categories, setCategory }) {
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <div className={styles.invisibleDiv}></div>
          <NavLink to='/' exact className={styles.logo}>Placeholder</NavLink>
          <div className={styles.userIcon}></div>
        </div>
        <div className={styles.pageNumber}>1 of 3</div>
        <form className={styles.form}>
          <div className={styles.formContents}>
            <h2>First, let’s get you set up.</h2>
            <h3>Pick a project category to connect with a specific community. You can always update this later.</h3>
            <Dropdown
              placeholder='Select a category'
              items={categories}
              setFunction={setCategory}
            />
            {/* {categories.length > 0 &&
              <select
                // className={styles.select}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map(category =>
                  <option
                    value={category.id}
                    key={category.name}>{category.name}</option>
                )}
              </select>} */}
            <div className={styles.btnContainer}>
              <h4>You’re back. And you’re a champ.</h4>
              <button
                // this id is used in changeStageButton in ProjectCreateForm/index.js. to change it, change that function's logic
                className={styles.next}
                id={"next"}
                onClick={changeStageButton}
              >Next: Project idea</button>
            </div>
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

export default Form1
