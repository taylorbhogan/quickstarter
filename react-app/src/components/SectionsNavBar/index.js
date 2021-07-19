import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SectionsNavBar.module.css'

const SectionsNavBar = () => {
  return (
    <ul className={styles.sectionsNavBar}>
      <li>
        <NavLink to='/section' className={styles.sectionLink}>Arts</NavLink>
      </li>
      <li>
        <NavLink to='/section' className={styles.sectionLink}>Comics & Decorations</NavLink>
      </li>
      <li>
        <NavLink to='/section' className={styles.sectionLink}>Design & Tech</NavLink>
      </li>
      <li>
        <NavLink to='/section' className={styles.sectionLink}>Film</NavLink>
      </li>
      <li>
        <NavLink to='/section' className={styles.sectionLink}>Food & Craft</NavLink>
      </li>
      <li>
        <NavLink to='/section' className={styles.sectionLink}>Games</NavLink>
      </li>
      <li>
        <NavLink to='/section' className={styles.sectionLink}>Music</NavLink>
      </li>
      <li>
        <NavLink to='/section' className={styles.sectionLink}>Publishing</NavLink>
      </li>
    </ul>
  );
}

export default SectionsNavBar;
