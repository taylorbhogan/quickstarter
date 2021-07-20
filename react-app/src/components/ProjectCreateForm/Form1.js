import styles from './ProjectCreateForm.module.css'

function Form1({ changeStageButton, categories, setCategory }) {


  return (
    <div>
      <div className={styles.pageNumber}>1 of 3</div>
      <form className={styles.form}>
        <div>
          <h2>First, let’s get you set up.</h2>
          <h3>Pick a project category to connect with a specific community. You can always update this later.</h3>
          {categories.length > 0 &&
            <select
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map(category =>
                <option
                  value={category.id}
                  key={category.name}>{category.name}</option>
              )}
            </select>}
        </div>
        <div>
          <button
            // this className is used in changeStageButton in ProjectCreateForm/index.js. to change it, change that function's logic
            className={'next'}
            onClick={changeStageButton}
          >Next: Project idea</button>
        </div>
      </form>

    </div >
  )
}

export default Form1
