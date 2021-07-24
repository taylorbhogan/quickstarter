import React, { useState } from 'react';
import FeaturedProject from './FeaturedProject';
import Recommended1 from './Recommended1';
import Recommended2 from './Recommended2';
import Recommended3 from './Recommended3';
import styles from './Featured.module.css';

const Featured = ({ projects }) => {
  const [openFirst, setOpenFirst] = useState(true);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);

  return (
    <>
      <div className={styles.margin}>
        <div className={styles.container}>
          <FeaturedProject projects={projects} />
          <Recommended1
            projects={projects}
            openFirst={openFirst}
            setOpenFirst={setOpenFirst}
            setOpenSecond={setOpenSecond}
            setOpenThird={setOpenThird}
          />
          <Recommended2
            projects={projects}
            openSecond={openSecond}
            setOpenFirst={setOpenFirst}
            setOpenSecond={setOpenSecond}
            setOpenThird={setOpenThird}
          />
          <Recommended3
            projects={projects}
            openThird={openThird}
            setOpenFirst={setOpenFirst}
            setOpenSecond={setOpenSecond}
            setOpenThird={setOpenThird}
          />
        </div>
      </div>
      <div className={styles.border}></div>
    </>
  )
};

export default Featured;
