import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { sections } from "../Section/sectionsData";

const profiles = [
  {
    name: "Cody Brown",
    image: "/cody.jpeg",
    github: "https://github.com/Code-E-Brown",
    linkedin: "https://www.linkedin.com/in/cody-brown-95b77b1aa/",
    angellist: "https://angel.co/u/cody-brown-10",
    portfolio: "https://codybrown.dev/",
  },
  {
    name: "Taylor Hogan",
    image: "/taylor.jpeg",
    github: "https://github.com/taylorbhogan",
    linkedin: "https://www.linkedin.com/in/taylorbhogan/",
    angellist: "https://angel.co/u/taylor-hogan",
    portfolio: "http://taylorbhogan.dev/",
  },
  {
    name: "Torrell Kennedy",
    image: "/torrell.jpeg",
    github: "https://github.com/tkenned2020",
    linkedin: "https://www.linkedin.com/in/torrell-kennedy-5813b3121/",
    portfolio: "https://tkenned2020.github.io/",
  },
  {
    name: "John Michihara",
    image: "/john.jpeg",
    github: "https://github.com/john-michihara",
    linkedin: "https://www.linkedin.com/in/john-michihara-305316167/",
    angellist: "https://angel.co/u/john-michihara",
    portfolio: "https://john-michihara.github.io/",
  },
];

function Footer() {
  return (
    <div>
      <div className={styles.categoriesMenu}>
        <ul className={styles.sectionsNavBar}>
          {sections.map((section) => (
            <li key={section.id}>
              <NavLink
                to={`/sections/${section.id}`}
                className={styles.sectionLink}
              >
                {section.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div id={"about-us"}>
        <div className={styles.aboutUsContainer}>
          <div className={styles.profiles}>
            {profiles.map((profile) => (
              <div key={profile.name} className={styles.profile}>
                <div className={styles.content}>
                  <div className={styles.name}>{profile.name}</div>
                  <div className={styles.aboutUsLinks}>
                    <a
                      href={profile.github}
                      className={styles.aboutUsLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github-square" />
                    </a>
                    <a
                      href={profile.linkedin}
                      className={styles.aboutUsLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                    {profile.angellist !== undefined && (
                      <a
                        href={profile.angellist}
                        className={styles.aboutUsLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-angellist" />
                      </a>
                    )}
                  </div>
                </div>
                <a
                  href={profile.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={profile.image}
                    className={styles.image}
                    alt="avatar"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={styles.linksContainer}>
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
        </div> */}
      </div>
      <div className={styles.graphicLinksContainer}>
        <div className={styles.graphicLeft}>Quickstarter, TYVM © 2021</div>
        <div className={styles.graphicRight}>
          <div className={styles.fassbook}>
            <img
              alt="fassbook-logo"
              className={styles.logo}
              src="https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png"
            />
          </div>
          <div className={styles.instergram}>
            <img
              alt="instergram-logo"
              className={styles.logo}
              src="https://freeiconshop.com/wp-content/uploads/edd/instagram-new-outline.png"
            />
          </div>
          <div className={styles.titter}>
            <img
              alt="titter-logo"
              className={styles.logo}
              src="https://icon-library.com/images/twitter-bird-vector-icon/twitter-bird-vector-icon-6.jpg"
            />
          </div>
          <div className={styles.yewtoob}>
            <img
              alt="yewtoob-logo"
              className={styles.logo}
              src="https://freeiconshop.com/wp-content/uploads/edd/youtube-solid.png"
            />
          </div>
          <div className={styles.littleWider}>
            <Dropdown placeholder={"English"} />
          </div>
          <div className={styles.wider}>
            <Dropdown placeholder={"$ US Dollar (USD) "} />
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
  );
}

export default Footer;
