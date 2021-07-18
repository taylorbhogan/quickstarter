function Form1({ changeStageButton }) {
  return (
    <div>
      <form>
        <h2>Form 2</h2>
        <div>
          <label>Description</label>
          <input type="text" />
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
