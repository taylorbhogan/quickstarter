import styles from './ProjectCreateForm.module.css'

function Form1({ changeStageButton, categories, setCategory }) {


  return (
    <div>
      <form className={styles.form}>
        <div>1 of 3</div>
        <div>
          <h1>First, let’s get you set up.</h1>
          <p>Pick a project category to connect with a specific community. You can always update this later.</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(category =>
              <option
                value={category}
                key={category}>{category}</option>
              )}
          </select>
        </div>
        <div>
          <button
            className={'next'}
            onClick={changeStageButton}
          >Next: Project idea</button>
        </div>
      </form>
    </div >
  )
}

export default Form1
