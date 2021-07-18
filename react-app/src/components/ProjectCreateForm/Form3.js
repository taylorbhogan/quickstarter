function Form1({ changeStageButton }) {
  return (
    <div>
      <form>
        <h2>Form 3</h2>
        <div>
          <label>Select Country</label>
          <input type="text" />
        </div>
        <div>
          <button onClick={changeStageButton}> Save </button>
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

export default Form1
