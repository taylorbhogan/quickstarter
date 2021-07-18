import styles from './ProjectCreateForm.module.css'

function Form3({ changeStageButton, handleSubmit, countries, setCountry }) {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div>1 of 3</div>
        <div>
          <h1>Finally, let’s confirm your eligibility.</h1>
          <p>Tell us where you’re based and confirm a few other details before we proceed.</p>
          <select
            onChange={(e) => setCountry(e.target.value)}
          >
            {countries.map(country =>
              <option
                value={country}
                key={country}>{country}</option>
              )}
          </select>
        </div>
        <div>
          <button
          type='submit'
          > Save </button>
        </div>
        <div>
          <button
            className={'back'}
            onClick={changeStageButton}
          > Back: Description</button>
        </div>
      </form>
    </div >
  )
}

export default Form3
