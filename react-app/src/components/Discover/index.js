import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/project';
import { NavLink } from 'react-router-dom';



function Discover() {
  const dispatch = useDispatch();

  const projects = useSelector(state => Object.values(state.projects))


  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  const projectComponents = projects.map((project) => {
    return (
      <li key={project.id}>
        <NavLink to={`/projects/${project.id}`}>{project.blurb}</NavLink>
      </li>
    );
  });
  return (
    <div>
      <h1>Hello from discover</h1>
      <h2>Project List: </h2>
      <ul>{projectComponents}</ul>
    </div>
  )
}

export default Discover
