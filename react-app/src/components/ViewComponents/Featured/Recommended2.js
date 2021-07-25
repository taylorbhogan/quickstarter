import React from 'react';
import { NavLink } from 'react-router-dom';
import RecommendedProject from './RecommendedProject';
import styles from './Featured.module.css';

const Recommended2 = ({ projects, openSecond, setOpenFirst, setOpenSecond, setOpenThird }) => {

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
      {openSecond &&
        (<div className={styles.right}>
          <h3 className={styles.title}>RECOMMENDED FOR YOU</h3>
          <div className={styles.recommendedContainer}>
            {projects.length > 0 && getRecommendedProjects(projects, 3).map(project => (
              <NavLink className={styles.linkWrapper} to={`/projects/${project.id}`}>
                <RecommendedProject project={project} />
              </NavLink>
            ))}
            <div className={styles.pageButtonsContainer}>
              <span className={styles.pageArrow} onClick={() => handleClick(setOpenFirst, setOpenSecond)}>
                <i class="fas fa-chevron-left"></i>
              </span>
              <span className={styles.pageButton} onClick={() => handleClick(setOpenFirst, setOpenSecond)}>1</span>
              <span className={styles.pageButtonSelected}>2</span>
              <span className={styles.pageButton} onClick={() => handleClick(setOpenThird, setOpenSecond)}>3</span>
              <span className={styles.pageArrow} onClick={() => handleClick(setOpenThird, setOpenSecond)}>
                <i class="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>)
      }
    </>
  );
};

export default Recommended2;
