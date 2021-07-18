import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/project'

import Form1 from './Form1';
import Form2 from './Form2';

function ScrollingForm() {
  const [currentStage, setCurrentStage] = useState(1)
  const [category, setCategory] = useState('Art')
  const [country, setCountry] = useState('France')
  const [blurb, setBlurb] = useState('')
  const dispatch = useDispatch();

  const countries = ['France', 'Vietnam', 'Libya']

  const changeStageButton = (e) => {
    e.preventDefault()

    if (e.target.className === 'next') {
      setCurrentStage(currentStage + 1)
    } else if (e.target.className === 'back') {
      setCurrentStage(currentStage - 1)
    }
  }

  const handleSubmit = async (e) => {
    // console.log('[[compontents/TestForm: handleSubmit]] --> [[store/project: createProject]]');
    e.preventDefault();
    const project = {
      category,
      blurb,
      country,
    }
    const data = await dispatch(createProject(project))

  }

  return (
    <div>
      <h1>Create your project!</h1>
      {currentStage === 1 && (
        <Form1
          changeStageButton={changeStageButton}
          setCategory={setCategory}
          />
          )}
      {currentStage === 2 && (
        <Form2
        changeStageButton={changeStageButton}
        setBlurb={setBlurb}
        blurb={blurb}
        />
      )}
      {currentStage === 3 && (
        // <Form3
        //   changeStageButton={changeStageButton}
        // />
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Form 3</h2>
            <div>
              <p>Finally, let’s confirm your eligibility.</p>
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
      )}
    </div>
  )
}

export default ScrollingForm
