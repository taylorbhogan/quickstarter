import React from 'react';
import styles from './Subscribe.module.css'

const Subscribe = ({ title, subtitle }) => {
  return (
    <>
      <div className={styles.margin}>
        <div className={styles.container}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.fakeFormContainer}>
            <input type='text' placeholder='Enter email address' />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Subscribe;
