function Form1({ changeStageButton, blurb, setBlurb }) {
  return (
    <div>
      <form>
        <h2>Form 2</h2>
        <div>
          <p>Describe what you’ll be creating.</p>
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
            className={'next'}
            onClick={changeStageButton}> Next: Countries</button>
        </div>
        <div>
          <button
            className={'back'}
            onClick={changeStageButton}
          > Back: Category</button>
        </div>
      </form>
    </div >
  )
}

export default Form1
