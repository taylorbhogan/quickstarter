import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Featured.module.css';

const Featured = ({ projects }) => {
  const featured = projects[0];

  const [openFirst, setOpenFirst] = useState(true);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [highlightFeatured, setHighlightFeatured] = useState(false);

  const calculateProgress = (project) => {
    const percentage = (project.current_funding / project.funding_goal) * 100;
    return `${percentage.toFixed()}%`;
  }

  const calculateProgressLimit = (project) => {
    const percentage = (project.current_funding / project.funding_goal) * 100;
    if (percentage > 100) {
      return '100%';
    }
    return `${percentage.toFixed()}%`;
  }

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
      <div className={styles.margin}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h3 className={styles.title}>FEATURED PRODUCT</h3>
            <NavLink to={`/projects/${featured?.id}`}>
              <div
              // onMouseOver={() => setHighlightFeatured(true)}
              // onMouseOut={() => setHighlightFeatured(false)}
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
                // style={highlightFeatured ? { color: 'green', textDecoration: 'underline' } : null}
                >{featured?.title}
                </h3>
                <p className={styles.projectSubTitle}>{featured?.sub_title}</p>
                <p className={styles.projectCreator}>{`By ${featured?.user_id}`}</p>
              </div>
            </NavLink>
          </div>

          {openFirst &&
            (<div className={styles.right}>
              <h3 className={styles.title}>RECOMMENDED FOR YOU</h3>
              <div
                className={styles.recommendedContainer}
              >
                {projects.length > 0 && getRecommendedProjects(projects, 3).map(project => (
                  <NavLink className={styles.linkWrapper} to={`projects/${project.id}`}>
                    <div className={styles.recommended}>
                      <img
                        src={project?.project_image_url}
                        className={styles.recommendedImage}
                        alt='recommended product'
                      />
                      <div>
                        <h3 className={styles.recommendedTitle}>{project?.title}</h3>
                        <p className={styles.recommendedFunded}>
                          {projects.length > 0 && calculateProgress(project)} funded
                        </p>
                        <p className={styles.projectCreator}>{`By ${project?.user_id}`}</p>
                      </div>
                    </div>
                  </NavLink>
                ))}
                <div className={styles.pageButtonsContainer}>
                  <span className={styles.pageArrowOff}>
                    <i class="fas fa-chevron-left"></i>
                  </span>
                  <span className={styles.pageButtonSelected}>1</span>
                  <span className={styles.pageButton} onClick={() => handleClick(setOpenSecond, setOpenFirst)}>2</span>
                  <span className={styles.pageButton} onClick={() => handleClick(setOpenThird, setOpenFirst)}>3</span>
                  <span className={styles.pageArrow} onClick={() => handleClick(setOpenSecond, setOpenFirst)}>
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>)
          }

          {openSecond &&
            (<div className={styles.right}>
              <h3 className={styles.title}>RECOMMENDED FOR YOU</h3>
              <div className={styles.recommendedContainer}>
                {projects.length > 0 && getRecommendedProjects(projects, 3).map(project => (
                  <div className={styles.recommended}>
                    <img
                      src={project?.project_image_url}
                      className={styles.recommendedImage}
                      alt='recommended project'
                    />
                    <div>
                      <h3 className={styles.recommendedTitle}>{project?.title}</h3>
                      <p className={styles.recommendedFunded}>
                        {projects.length > 0 && calculateProgress(project)} funded
                      </p>
                      <p className={styles.projectCreator}>{`By ${project?.user_id}`}</p>
                    </div>
                  </div>
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

          {openThird &&
            (<div className={styles.right}>
              <h3 className={styles.title}>RECOMMENDED FOR YOU</h3>
              <div className={styles.recommendedContainer}>
                {projects.length > 0 && getRecommendedProjects(projects, 3).map(project => (
                  <div className={styles.recommended}>
                    <img
                      src={project?.project_image_url}
                      className={styles.recommendedImage}
                      alt='recommended project'
                    />
                    <div>
                      <h3 className={styles.recommendedTitle}>{project.title}</h3>
                      <p className={styles.recommendedFunded}>
                        {projects.length > 0 && calculateProgress(project)} funded
                      </p>
                      <p className={styles.projectCreator}>{`By ${project?.user_id}`}</p>
                    </div>
                  </div>
                ))}
                <div className={styles.pageButtonsContainer}>
                  <span className={styles.pageArrow} onClick={() => handleClick(setOpenSecond, setOpenThird)}>
                    <i class="fas fa-chevron-left"></i>
                  </span>
                  <span className={styles.pageButton} onClick={() => handleClick(setOpenFirst, setOpenThird)}>1</span>
                  <span
                    className={styles.pageButton} onClick={() => handleClick(setOpenSecond, setOpenThird)}> 2</span>
                  <span className={styles.pageButtonSelected}>3</span>
                  <span className={styles.pageArrowOff}>
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
      <div className={styles.border}></div>
    </>
  )
};

export default Featured;
