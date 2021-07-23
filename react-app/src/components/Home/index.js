import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/project';
import Featured from '../ViewComponents/Featured';
import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => Object.values(state.projects));

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <>
      <div className={styles.container}>
        <Featured projects={projects} />
      </div>
      <div className={styles.border}></div>
    </>
  )
};

export default Home;
