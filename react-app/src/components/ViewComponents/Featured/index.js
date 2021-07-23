import React from 'react';
import styles from './Featured.module.css';

const Featured = ({ projects }) => {
  const project = projects[0]

  return (
    <div className={styles.container}>
      <div className={styles.featured}>
        <h3>FEATURED PRODUCT</h3>
        <img src={project.project_image_url}></img>
      </div>
      <div className={styles.recommended}></div>
    </div>
  )

};

export default Featured;
