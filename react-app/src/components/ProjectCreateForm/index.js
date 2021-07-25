import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { createProject } from '../../store/project'

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import styles from './ProjectCreateForm.module.css'

function ProjectCreateForm({ setShowSpotAddModal }) {
  const [errors, setErrors] = useState([]);
  // TODO: implement error display (see SignUpForm errors.map)
  const [currentStage, setCurrentStage] = useState(1)
  const [country, setCountry] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [categories, setCategories] = useState([])
  const [countries, setCountries] = useState([])
  const [category, setCategory] = useState('')
  const user = useSelector(state => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/categories`);
      const cats = await response.json();
      setCategories(cats.categories);

      const countryRes = await fetch(`/api/countries`);
      const countriesResponse = await countryRes.json()
      setCountries(countriesResponse.countries)
      //    the below setCategory was commented out to enable the disabled logic for the next button on Form1
      // setCategory(cats.categories[0].id)
      //    the above setCategory was commented out to enable the disabled logic for the next button on Form1
      //    the below setCountry was commented out to enable the disabled logic for the next button on Form1
      // setCountry(countriesResponse.countries[0].id)
      //    the above setCountry was commented out to enable the disabled logic for the next button on Form1
    })();
  }, [])

  const changeStageButton = (e) => {
    e.preventDefault()

    if (e.target.id === 'next') {
      setCurrentStage(currentStage + 1)
    } else if (e.target.id === 'back') {
      setCurrentStage(currentStage - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      userId: user.id,
      category,
      subTitle,
      country,
    }
    // console.log(project)
    const createdProject = await dispatch(createProject(project))
    if (createdProject) {
      setShowSpotAddModal(false);
      history.push(`/projects/${createdProject.id}/edit`);
    }

    // TODO: implement error handling.
  }

  return (
    <div>
      {/* <button
      //  onClick={}
      >Close</button> */}
      {currentStage === 1 && (
        <Form1
          changeStageButton={changeStageButton}
          setCategory={setCategory}
          categories={categories}
          category={category}
          setShowSpotAddModal={setShowSpotAddModal}
        />
      )}
      {currentStage === 2 && (
        <Form2
          changeStageButton={changeStageButton}
          setSubTitle={setSubTitle}
          subTitle={subTitle}
          setShowSpotAddModal={setShowSpotAddModal}
        />
      )}
      {currentStage === 3 && (
        <Form3
          changeStageButton={changeStageButton}
          handleSubmit={handleSubmit}
          setCountry={setCountry}
          countries={countries}
          country={country}
          setShowSpotAddModal={setShowSpotAddModal}
        />
      )}
    </div>
  )
}

export default ProjectCreateForm
