import React from "react";
import { NavLink } from "react-router-dom";
import RecommendedProject from "./RecommendedProject";
import styles from "./Featured.module.css";

const Recommended3 = ({
  projects,
  openThird,
  setOpenFirst,
  setOpenSecond,
  setOpenThird,
}) => {
  const getRandomNum = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getRecommendedProjects = (projects, max) => {
    const recommended = [];
    for (let i = 0; i < max; i++) {
      recommended.push(projects[getRandomNum(projects.length)]);
    }
    return recommended;
  };

  const handleClick = (setOpenFunction, setCloseFunction) => {
    setOpenFunction(true);
    setCloseFunction(false);
  };

  return (
    <>
      {openThird && (
        <div className={styles.right}>
          <h3 className={styles.title}>RECOMMENDED FOR YOU</h3>
          <div className={styles.recommendedContainer}>
            {projects.length > 0 &&
              getRecommendedProjects(projects, 3).map((project) => (
                <NavLink
                  className={styles.linkWrapper}
                  to={`/projects/${project.id}`}
                >
                  <RecommendedProject project={project} />
                </NavLink>
              ))}
            <div className={styles.pageButtonsContainer}>
              <span
                className={styles.pageArrow}
                onClick={() => handleClick(setOpenSecond, setOpenThird)}
              >
                <i className="fas fa-chevron-left" />
              </span>
              <span
                className={styles.pageButton}
                onClick={() => handleClick(setOpenFirst, setOpenThird)}
              >
                1
              </span>
              <span
                className={styles.pageButton}
                onClick={() => handleClick(setOpenSecond, setOpenThird)}
              >
                {" "}
                2
              </span>
              <span className={styles.pageButtonSelected}>3</span>
              <span className={styles.pageArrowOff}>
                <i className="fas fa-chevron-right" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recommended3;
