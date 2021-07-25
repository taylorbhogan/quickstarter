import React from 'react';
import styles from './Header.module.css';

const Header = ({ section }) => {
  return (
    <>
      <div className={styles.margin}>
        <div className={styles.container}>
          <h3 className={styles.title}>{section.name}</h3>
          <p className={styles.blurb}>{section.blurb}</p>
          <div className={styles.linkContainer}>
            {section.categories.map(category => (
              <span
                key={category}
                className={styles.link}
              >{`Explore ${category}`}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
    </>
  );
};

export default Header;
