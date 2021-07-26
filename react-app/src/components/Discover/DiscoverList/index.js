import styles from './DiscoverList.module.css'
import { NavLink } from 'react-router-dom'

function DiscoverList({projects}) {
  // {(projects.map((project) => (
  //       <li
  //         key={project.id}
  //         className={styles.navLink}
  //         >
  //         <NavLink to={`/projects/${project.id}`}>{project.title}</NavLink>
  //       </li>
  //     )))}
  return (
    <div>
      <div>
        <button>Collections</button>
        <dropdown>
          <ul>
          <div>
            <li>Recommended For You</li>
            <li>Projects We Love</li>
            <li>Saved Projects</li>
            <li>Trending</li>
            <li>Nearly Funded</li>
            <li>Just Launched</li>
            <li>Upcoming Projects</li>
            <li>Projects Near You</li>
            <li>Backed By People You Follow</li>
            <li>Everything</li>
          </div>
          </ul>
        </dropdown>
      </div>
      <div>________________________________________________________________</div>
      <div>
        <button>Sections</button>
        <dropdown>
          <ul>
          <div>
            <li>Arts</li>
            <li>Comics & Illustration</li>
            <li>Design & Tech</li>
            <li>Film</li>
            <li>Food & Craft</li>
            <li>Games</li>
            <li>Music</li>
            <li>Publishing</li>
          </div>
          </ul>
        </dropdown>
      </div>
      <div>________________________________________________________________</div>
      <div>
        <button>Categories</button>
        <dropdown>
          <ul>
          <div>
            <li>Art</li>
            <li>Comics</li>
            <li>Crafts</li>
            <li>Dance</li>
            <li>Design</li>
            <li>Fashion</li>
            <li>Film & Video</li>
            <li>Food</li>
            <li>Games</li>
            <li>Journalism</li>
            <li>Music</li>
            <li>Photography</li>
            <li>Publishing</li>
            <li>Technology</li>
            <li>Theater</li>
          </div>
          </ul>
        </dropdown>
      </div>
      <div>________________________________________________________________</div>
      <div>
        <button>On Our Radar</button>
        <dropdown>
          <ul>
          <div>
            <li>Affordable Art</li>
            <li>Bikes</li>
            <li>DIY</li>
            <li>Environmental</li>
            <li>For Kids</li>
            <li>LGBTQIA+</li>
            <li>Public Benefit</li>
            <li>Robots</li>
            <li>RPGs</li>
            <li>Sci-Fi and Fantasy</li>
            <li>STEM</li>
            <li>Zine Quest</li>
          </div>
          </ul>
        </dropdown>
      </div>
    </div>
  )
}

export default DiscoverList
