function Form1({ changeStageButton, setCategory }) {

  const categories = ['Art', 'Comics', 'Crafts']


  return (
    <div>
      <form>
        <h2>Form 1</h2>
        <div>
          <p>First, let’s get you set up.</p>
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
            // onClick={setCurrentStage(currentStage + 1)}
            className={'next'}
            onClick={changeStageButton}
          >Next: Project idea</button>
        </div>
      </form>
    </div >
  )
}

export default Form1
