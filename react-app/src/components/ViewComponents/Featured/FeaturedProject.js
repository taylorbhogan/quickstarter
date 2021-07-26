import React, { useState } from 'react';
import styles from './Featured.module.css'
import { NavLink } from 'react-router-dom';

const FeaturedProject = ({ projects }) => {
  const [highlight, setHighlight] = useState(false);

  const featured = projects[0];

  const calculateProgressLimit = (project) => {
    const percentage = (project.current_funding / project.funding_goal) * 100;
    if (percentage > 100) {
      return '100%';
    }
    return `${percentage.toFixed()}%`;
  }

  return (
    <div className={styles.left}>
      <h3 className={styles.title}>FEATURED PRODUCT</h3>
      <NavLink to={`/projects/${featured?.id}`}>
        <div
          onMouseOver={() => setHighlight(true)}
          onMouseOut={() => setHighlight(false)}
        >
          <img
            src={featured?.project_image_url}
            className={styles.featuredImage}
            alt='featured product'
          />
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${featured && calculateProgressLimit(featured)}` }}>
            </div>
          </div>
          <h3
            className={styles.projectTitle}
            style={highlight ? { color: 'green', textDecoration: 'underline' } : null}
          >{featured?.title}
          </h3>
          <p className={styles.projectSubTitle}>{featured?.sub_title}</p>
          <p className={styles.projectCreator}>{`By ${featured?.creator}`}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default FeaturedProject;
