import React from "react";

import styles from "./SearchProject.module.css";

const SearchProject = ({ project, categories, subCategories }) => {
  const calculateProgressLimit = (project) => {
    const percentage = (project.current_funding / project.funding_goal) * 100;
    if (percentage > 100) {
      return "100%";
    }
    return `${percentage.toFixed()}%`;
  };

  const progress = (project.current_funding / project.funding_goal) * 100;

  const daysToGo = Math.floor(
    (new Date(project.created_at).getTime() +
      project.campaign_duration * 86400000 -
      new Date().getTime()) /
      86400000
  ).toString();

  const getCategory = () => {
    let result = "";

    if (project.sub_category_id) {
      subCategories.forEach((subCategory) => {
        if (subCategory.id === project.sub_category_id) {
          result = subCategory.name;
        }
      });
    } else {
      categories.forEach((category) => {
        if (category.id === project.category_id) {
          result = category.name;
        }
      });
    }

    return result;
  };

  return (
    <div className={styles.project}>
      <img src={project.project_image_url}></img>
      <div className={styles.projectDetails}>
        <div className={styles.heightLimit}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>{project.title}</div>
          </div>
          <div className={styles.subTitleContainer}>
            <div className={styles.subTitle}>{project.sub_title}</div>
          </div>
          <div className={styles.creator}>
            by <span>{project.creator}</span>
          </div>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: calculateProgressLimit(project) }}
          ></div>
        </div>
        <div className={styles.campaignDetails}>
          <div className={styles.pledge}>
            ${project.current_funding} pledged
          </div>
          <div className={styles.funded}>{progress.toFixed()}% funded</div>
          <div className={styles.daysToGo}>{daysToGo} days to go</div>
        </div>
        <div>
          <div className={styles.category}>{getCategory()}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchProject;
