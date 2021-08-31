import React from "react";
import ExploreProject from "./ExploreProject";
import styles from "./Explore.module.css";

// Not functional, but looks like it is!

const Explore = ({ projects, section }) => {
  const randomProject = () => {
    return projects[Math.floor(Math.random() * projects.length)];
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{`Explore ${section.name}`}</h3>
      <div className={styles.projectsContainer}>
        <div>
          {section.categories.map((category) => (
            <div key={category} className={styles.button}>
              {category}
            </div>
          ))}
        </div>
        <ExploreProject project={randomProject()} />
        <ExploreProject project={randomProject()} />
        <ExploreProject project={randomProject()} />
      </div>
    </div>
  );
};

export default Explore;
