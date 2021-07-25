import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/project';
import { sections, filterProjectsBySection } from './sectionsData';
import Header from '../ViewComponents/Header';
import Featured from '../ViewComponents/Featured';
import Explore from '../ViewComponents/Explore';
import Subscribe from '../ViewComponents/Subscribe';
import SectionsNavBar from '../SectionsNavBar';

const Section = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const projects = useSelector(state => Object.values(state.projects));
  const [section] = sections.filter(section => {
    return section.id === parseInt(id);
  });
  const filteredProjects = filterProjectsBySection(parseInt(id), projects);
  console.log(filteredProjects)

  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch]);

  return (
    <>
      <Featured projects={filteredProjects.length > 0 ? filteredProjects : projects} />
      <SectionsNavBar />
      <Header section={section} />
      <Subscribe title={section.subscribeTitle} subtitle={section.subscribeSubtitle} />
      <Explore
        projects={filteredProjects.length > 0 ? filteredProjects : projects}
        section={section} />
    </>
  )
};

export default Section;
