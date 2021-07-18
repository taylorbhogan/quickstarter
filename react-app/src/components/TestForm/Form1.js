// import { useState, useEffect } from 'react';


// function Form1({ changeStageButton }) {
function Form1({ changeStageButton }) {
  return (
    <div>
      <form>
        <h2>Form 1</h2>
        <div>
          <label>Category</label>
          <input type="text" />
        </div>
        <div>
          <button
            // onClick={setCurrentStage(currentStage + 1)}
            className={'next'}
            onClick={changeStageButton}
          > Next: Description</button>
        </div>
      </form>
    </div >
  )
}

export default Form1
