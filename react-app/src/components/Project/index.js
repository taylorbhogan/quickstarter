import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { createBacking } from '../../store/backing'

function Project() {
  const [project, setProject] = useState({});
  const [amount, setAmount] = useState(0);
  const { projectId } = useParams();
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);


  useEffect(() => {
    if (!projectId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/projects/${projectId}`);
      const project = await response.json();

      setProject(project);
    })();
  }, [projectId, amount]);

  if (!project) {
    return null;
  }

  const addABacking = async (e) => {
    e.preventDefault()

    if (amount <= 0) {
      setAmount(0)

    } else {

      const backing = {
        amount: +amount,
        user_id: user.id,
        project_id: +projectId,
        // DEFAULT BACKING DOES NOT GET AN ID; WE USE THE ID FROM REAL REWARDS TO ADD THEM TO THE DB
        reward_id: e.target.id === '' ? null : +e.target.id
      }

      const data = await dispatch(createBacking(backing))
      const createdBacking = data.newBacking
      setAmount(0)
      console.log('1234----responseFromStore-------->', createdBacking);
      // if (createdBacking){
      //   do stuff
      // }
    }
  }

  return (
    <div>
      <ul>
        <li>
          <strong>Project Id</strong> {projectId}
        </li>
        <li>
          <strong>Project SubTitle</strong> {project.subTitle}
        </li>
        <li>
          <strong>Project Category</strong> {project.category}
        </li>
        <li>
          <strong>Project Country</strong> {project.country}
        </li>
        <li>
          <strong>Project Funding</strong> {project.current_funding}
        </li>
      </ul>
      <form>
        <label>Want to back this project?</label>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <button
          type='submit'
          // id={11}
          // id='hello'
          // DEFAULT BACKING DOES NOT GET AN ID; REWARDS DO
          onClick={addABacking}
        >Add a backing</button>
      </form>
    </div>
  );
}
export default Project;
