import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/project';

const Home = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => Object.values(state.projects));

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <>
      <h1>Hello from new home</h1>
      {console.log(projects)}
      <h2>{projects.length > 0 && projects.map(project => project.title)}</h2>
    </>
  )

};

export default Home;
