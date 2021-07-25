import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Slides.module.css';

const SlideProject = ({ project }) => {
  const [highlight, setHighlight] = useState(false);

  const calculateProgressLimit = (project) => {
    const percentage = (project.current_funding / project.funding_goal) * 100;
    if (percentage > 100) {
      return '100%';
    }
    return `${percentage.toFixed()}%`;
  }

  return (
    <div
      className={styles.projectContainer}
      onMouseOver={() => setHighlight(true)}
      onMouseOut={() => setHighlight(false)}
    >
      <Link to={`/projects/${project?.id}`}>
        <img src={project?.project_image_url} className={styles.image} alt="Project showcase" />
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${project && calculateProgressLimit(project)}` }}>
          </div>
        </div>
        <h3
          className={styles.projectTitle}
          style={highlight ? { color: 'green', textDecoration: 'underline' } : null}
        >{project?.title}</h3>
        <p className={styles.subTitle}>{project?.sub_title}</p>
        <p className={styles.creator}>{`By ${project?.user_id}`}</p>
      </Link>
    </div>
  )

};

export default SlideProject;
