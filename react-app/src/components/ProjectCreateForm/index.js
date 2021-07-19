import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createProject } from '../../store/project'

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import styles from './ProjectCreateForm.module.css'

function ProjectCreateForm() {
  const [errors, setErrors] = useState([]);
  // TODO: implement error display (see SignUpForm errors.map)
  const [currentStage, setCurrentStage] = useState(1)
  const [category, setCategory] = useState('Art')
  const [country, setCountry] = useState('France')
  const [blurb, setBlurb] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();

  const countries = ['France', 'Vietnam', 'Libya']
  const categories = ['Art', 'Comics', 'Crafts']


  const changeStageButton = (e) => {
    e.preventDefault()

    if (e.target.className === 'next') {
      setCurrentStage(currentStage + 1)
    } else if (e.target.className === 'back') {
      setCurrentStage(currentStage - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      category,
      blurb,
      country,
    }
    const createdProject = await dispatch(createProject(project))
    if (createdProject) {
      history.push(`/projects/${createdProject.id}/edit`);
    }
// TODO: implement error handling.

  }

  return (
    <div>
      <div className={styles.header}>
        <div></div>
        <div className={styles.logo}>Kickstarter</div>
        <div className={styles.userIcon}></div>
      </div>
      {currentStage === 1 && (
        <Form1
          changeStageButton={changeStageButton}
          setCategory={setCategory}
          categories={categories}
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
        <Form3
          changeStageButton={changeStageButton}
          handleSubmit={handleSubmit}
          setCountry={setCountry}
          countries={countries}
        />
      )}
    </div>
  )
}

export default ProjectCreateForm
