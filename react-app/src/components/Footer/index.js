import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';

function Footer() {

  return(
    <div>
      <div className={styles.categoriesMenu}>
        <ul className={styles.sectionsNavBar}>
          <li>
            <NavLink to='/section' className={styles.sectionLink}>Arts</NavLink>
          </li>
          <li>
            <NavLink to='/section' className={styles.sectionLink}>Comics & Illustrations</NavLink>
          </li>
          <li>
            <NavLink to='/section' className={styles.sectionLink}>Design & Tech</NavLink>
          </li>
          <li>
            <NavLink to='/section' className={styles.sectionLink}>Film</NavLink>
          </li>
          <li>
            <NavLink to='/section' className={styles.sectionLink}>Food & Craft</NavLink>
          </li>
          <li>
            <NavLink to='/section' className={styles.sectionLink}>Games</NavLink>
          </li>
          <li>
            <NavLink to='/section' className={styles.sectionLink}>Music</NavLink>
          </li>
          <li>
            <NavLink to='/section' className={styles.sectionLink}>Publishing</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.linksContainer}>
          <div className={styles.linkSection}>
            <div className={styles.linksHeader}>ABOUT</div>
            <div className={styles.links}>About us</div>
            <div className={styles.links}>Our charter</div>
            <div className={styles.links}>Stats</div>
            <div className={styles.links}>Press</div>
            <div className={styles.links}>Jobs</div>
          </div>
          <div className={styles.linkSection}>
            <div className={styles.linksHeader}>SUPPORT</div>
            <div className={styles.links}>Help Center</div>
            <div className={styles.links}>Our Rules</div>
            <div className={styles.links}>Creator Resources</div>
            <div className={styles.links}>Patrons</div>
            <div className={styles.links}>Brand assets</div>
          </div>
          <div className={styles.linkSection}>
            <div className={styles.linksHeader}>MORE FROM QUICKSTARTER</div>
            <div className={styles.links}>Newsletters</div>
            <div className={styles.links}>Quickstarter Magazine</div>
            <div className={styles.links}>The Creative Independent</div>
            <div className={styles.links}>Mobile apps</div>
            <div className={styles.links}>Research</div>
          </div>
        </div>
      </div>
      <div className={styles.graphicLinksContainer}>
        <div className={styles.graphicLeft}>Quickstarter, TYVM © 2021</div>
        <div className={styles.graphicRight}>
          <div className={styles.fassbook}>
            <img
                alt='fassbook-logo'
                className={styles.logo}
                src='https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png'
                />
          </div>
          <div className={styles.instergram}>
            <img
                alt='instergram-logo'
                className={styles.logo}
                src='https://freeiconshop.com/wp-content/uploads/edd/instagram-new-outline.png'
                />
          </div>
          <div className={styles.titter}>
            <img
              alt='titter-logo'
              className={styles.logo}
              src='https://icon-library.com/images/twitter-bird-vector-icon/twitter-bird-vector-icon-6.jpg'
              />
          </div>
          <div className={styles.yewtoob}>
            <img
                alt='yewtoob-logo'
                className={styles.logo}
                src='https://freeiconshop.com/wp-content/uploads/edd/youtube-solid.png'
                />
          </div>
          <div className={styles.littleWider}>
            <Dropdown
              placeholder={'English'}
              />
          </div>
          <div className={styles.wider}>
            <Dropdown
              placeholder={'$ US Dollar (USD) '}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomLinksWrapper}>
        <div className={styles.bottomLinks}>
          <div className={styles.links}>Trust & Safety</div>
          <div className={styles.links}>Terms of Use</div>
          <div className={styles.links}>Privacy Policy</div>
          <div className={styles.links}>Cookie Policy</div>
          <div className={styles.links}>Accessibility Statement</div>
          <div className={styles.links}>CA Notice of Consent</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
