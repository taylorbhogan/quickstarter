import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SectionsNavBar from '../SectionsNavBar';
import DropdownOpenButton from './Dropdown/DropdownOpenButton';
import styles from './NavBar.module.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <>
      <nav className={styles.navBar}>
        <section className={styles.navBarLeft}>
          <NavLink to='/discover' exact={true} className={styles.headerLink}>Discover</NavLink>
          <NavLink to='/learn' exact={true} className={styles.headerLink}>Start a project</NavLink>
        </section>
        <section className={styles.navBarCenter}>
          <NavLink to='/' exact={true} className={styles.logoPlaceholder}>QUICKSTARTER</NavLink>
        </section>
        <section className={styles.navBarRight}>
          <button className={styles.searchBtn}>
            <span className={styles.searchText}>Search</span>
            <span className={styles.searchIcon}>
              <i className="fas fa-search" />
            </span>
          </button>
          {(user ?
            <DropdownOpenButton />
            :
            <NavLink to='/login' className={styles.logInLink}>Log in</NavLink>
          )}
        </section>
      </nav >
      <SectionsNavBar />
      {/* <LogoutButton /> */}
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
