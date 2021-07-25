import React from 'react';
import { NavLink } from 'react-router-dom';
import { sections } from '../Section/sectionsData';
import styles from './SectionsNavBar.module.css'

const SectionsNavBar = () => {

  return (
    <ul className={styles.sectionsNavBar}>
      {sections.map(section => (
        <li>
          <NavLink to={`/sections/${section.id}`} className={styles.sectionLink}>{section.name}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default SectionsNavBar;
