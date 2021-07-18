import { useState, useEffect } from 'react';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

function ScrollingForm() {
  const [currentStage, setCurrentStage] = useState(1)

  const changeStageButton = (e) => {
    e.preventDefault()

    if (e.target.className === 'next') {
      setCurrentStage(currentStage + 1)
    } else if (e.target.className === 'back') {
      setCurrentStage(currentStage - 1)
    }
  }

  return (
    <div>
      <h1>Create your project!</h1>
      {currentStage === 1 && (
        <Form1
          changeStageButton={changeStageButton}
        />
      )}
      {currentStage === 2 && (
        <Form2
          changeStageButton={changeStageButton}
        />
      )}
      {currentStage === 3 && (
        <Form3
          changeStageButton={changeStageButton}
        />
      )}
    </div>
  )
}

export default ScrollingForm
