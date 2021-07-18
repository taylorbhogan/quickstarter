import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SectionsNavBar from '../SectionsNavBar';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <section className={styles.navBarLeft}>
          <button className={styles.discoverButton}>Discover</button>
          <NavLink to='/projects' exact={true} className={styles.projectLink}>Start a project</NavLink>
        </section>
        <section className={styles.navBarCenter}>
          <NavLink to='/' exact={true} className={styles.logoPlaceholder}>Placeholder</NavLink>
        </section>
        <section className={styles.navBarRight}>
          <button className={styles.searchBtn}>
            <span className={styles.searchText}>Search</span>
            <span className={styles.searchIcon}>
              <i className="fas fa-search" />
            </span>
          </button>
          <button className={styles.profileBtn}>
            <div className={styles.circle}></div>
          </button>
        </section>
      </nav >
      <SectionsNavBar />
    </>
    // <ul>
    //   <li>
    //     <NavLink to='/' exact={true} activeClassName='active'>
    //       Home
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to='/login' exact={true} activeClassName='active'>
    //       Login
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to='/sign-up' exact={true} activeClassName='active'>
    //       Sign Up
    //     </NavLink>
    //   </li>
    //   <li>
    //     <NavLink to='/users' exact={true} activeClassName='active'>
    //       Users
    //     </NavLink>
    //   </li>
    //   <li>
    //     <LogoutButton />
    //   </li>
    // </ul>
  );
}

export default NavBar;
