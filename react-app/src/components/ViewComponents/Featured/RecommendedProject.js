import React, { useState } from 'react';
import styles from './Featured.module.css'

const RecommendedProject = ({ project }) => {
  const [highlight, setHighlight] = useState(false);

  const calculateProgress = (project) => {
    const percentage = (project.current_funding / project.funding_goal) * 100;
    return `${percentage.toFixed()}%`;
  };

  return (
    <div
      className={styles.recommended}
      onMouseOver={() => setHighlight(true)}
      onMouseOut={() => setHighlight(false)}
    >
      <img
        src={project?.project_image_url}
        className={styles.recommendedImage}
        alt='recommended product'
      />
      <div>
        <h3
          className={styles.recommendedTitle}
          style={highlight ? { color: 'green', textDecoration: 'underline' } : null}
        >{project?.title}</h3>
        <p className={styles.recommendedFunded}>
          {project && calculateProgress(project)} funded
        </p>
        <p className={styles.projectCreator}>{`By ${project?.creator}`}</p>
      </div>
    </div >
  );
};

export default RecommendedProject;
