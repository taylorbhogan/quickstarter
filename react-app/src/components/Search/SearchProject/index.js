import React from "react";

import styles from "./SearchProject.module.css";

const SearchProject = ({ project }) => {
  return (
    <div className={styles.project}>
      <img src={project.project_image_url}></img>
      <div className={styles.projectDetails}>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.subTitleContainer}>
          <div className={styles.subTitle}>{project.sub_title}</div>
        </div>
        <div className={styles.creator}>
          by <span>{project.creator}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchProject;
