import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DropdownOpenButton from './Dropdown/DropdownOpenButton';
import { login } from '../../store/session';
import styles from './NavBar.module.css'
import DiscoverModal from '../DiscoverModal';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const handleDemoLogin = async (email, password) => {
    await dispatch(login(email, password))
  };

  return (
    <>
      <nav className={styles.navBar}>
        <section className={styles.navBarLeft}>
          <div className={styles.experimentToAlignLinks}>
          <DiscoverModal />
          {/* <NavLink to='/discover' exact={true} className={styles.headerLink}>Discover</NavLink> */}
          <NavLink to='/learn' exact={true} className={styles.headerLink}>Start a project</NavLink>

          </div>

        </section>
        <section className={styles.navBarCenter}>
          <NavLink to='/' exact={true} className={styles.logoPlaceholder}>QUICKSTARTER</NavLink>
        </section>
        <section className={styles.navBarRight}>
          {/* <button className={styles.searchBtn}>
            <span className={styles.searchText}>Search</span>
            <span className={styles.searchIcon}>
              <i className="fas fa-search" />
            </span>
          </button> */}
          {(user ?
            <DropdownOpenButton />
            :
            (<>
              <button
                type='button'
                className={styles.demoBtn}
                onClick={() => handleDemoLogin("marnie@aa.io", "password")}
              >Demo</button>
              <NavLink to='/login' className={styles.logInLink}>Log in</NavLink>
            </>)
          )}
        </section>
      </nav >
      {/* <SectionsNavBar /> */}
    </>
  );
}

export default NavBar;
