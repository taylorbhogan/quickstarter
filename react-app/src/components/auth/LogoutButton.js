import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import styles from './LogoutButton.module.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div
      className={styles.logoutButtonWrapper}
    >
      <button
        onClick={onLogout}
        className={styles.logoutButton}
      >Log out</button>
    </div>
  )

};

export default LogoutButton;
