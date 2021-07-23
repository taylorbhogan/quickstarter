import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/project';
import Featured from '../ViewComponents/Featured';
import Mission from '../ViewComponents/Mission';
import Slides from '../ViewComponents/Slides';
import Subscribe from '../ViewComponents/Subscribe';
import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => Object.values(state.projects));

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  return (
    <>
      <Featured projects={projects} />
      <Mission />
      <Slides projects={projects} title="FRESH FAVORITES" />
      <Subscribe
        title='Discover the best and brightest projects on Quickstarter.'
        subtitle='Sign up to receive our weekly Projects We Love newsletter.'
      />
    </>
  )
};

export default Home;
