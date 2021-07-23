import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Mission.module.css';

const Mission = () => {

  return (
    <>
      <div className={styles.margin}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imageContainer}>
              <img src='https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80' alt='Mission picture' className={styles.image} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <h3 className={styles.title}>Quickstarter exists to help bring creative projects to life.</h3>
              <p className={styles.text}>We believe that art and creative expression are essential to a healthy and vibrant society, and the space to create requires protection.</p>
            </div>
            <div className={styles.linkContainer}>
              <NavLink to='/' className={styles.link}>Read about our mission</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
    </>
  )

};

export default Mission;
