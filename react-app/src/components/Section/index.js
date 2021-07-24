import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/project';
import { sections, filterProjectsBySection } from './sectionsData';
import SectionHeader from './SectionHeader';
import Featured from '../ViewComponents/Featured';
import styles from './Section.module.css';

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
      <SectionHeader section={section} />
      {filteredProjects.length > 0 && <Featured projects={filteredProjects} />}
    </>
  )
};

export default Section;
