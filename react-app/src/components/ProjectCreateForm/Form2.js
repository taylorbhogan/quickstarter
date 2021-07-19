import styles from './ProjectCreateForm.module.css'

function Form2({ changeStageButton, blurb, setBlurb }) {
  return (
    <div>
      <form className={styles.form}>
        <div>2 of 3</div>
        <div>
        <h1>Describe what you’ll be creating.</h1>
        <p>And don’t worry, you can edit this later, too.</p>
        <textarea
          type="text"
          placeholder={' An album of songs based on Pablo Neruda poems.'}
          onChange={(e) => setBlurb(e.target.value)}
          value={blurb}
        />
        </div>
        <div>
          <button
          // this className is used in changeStageButton in ProjectCreateForm/index.js. to change it, change that function's logic
          className={'next'}
            onClick={changeStageButton}> Next: Countries</button>
        </div>
        <div>
          <button
          // this className is used in changeStageButton in ProjectCreateForm/index.js. to change it, change that function's logic
            className={'back'}
            onClick={changeStageButton}
          > Back: Category</button>
        </div>
      </form>
    </div >
  )
}

export default Form2
