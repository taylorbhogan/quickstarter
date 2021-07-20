import ProjectCreateModal from '../ProjectCreateModal';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getProjects } from '../../store/project';
import styles from './Learn.module.css';

function Learn() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProjects())
  // }, [dispatch])

  return (
    <>
      <div className={styles.startContainer}>
        <div className={styles.startTitle}>
          <h1>Bring your creative project to life.</h1>
          <ProjectCreateModal />
        </div>
      </div>
      <div className={styles.featuredContainer}>
        <div className={styles.featuredLarge}>
          <div className={styles.captionsContainer}>
            <span className={styles.captions}>
              De La Soul raised $600,874 to make their Grammy-winning album, And the Anonymous Nobody..., with full creative control
            </span>
          </div>
        </div>
        <div className={styles.featuredSmallTop}>
          <div className={styles.captionsContainer}>
            <span className={styles.captions}>
              With the support of 13, 454 backers, Elena Favilli and Francesca Cavallo published Good Night Stories for Rebel Girls - and became best-selling authors.
            </span>
          </div>
        </div>
        <div className={styles.featuredSmallBottom}>
          <div className={styles.captionsContainer}>
            <span className={styles.captions}>
              Since raising over $300k through seven successful projects, Craighton Berman now runs his own homewares company with his partner, Emily.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.quoteContainer}>
        <div className={styles.quotesMargin}>

          <h2 className={styles.quote}><span className={styles.quotationMark}>"</span>We see Kickstarter as a home for creative minds and a wonderful platform; where people who believe, respect, and see the vision can support an idea and make it a reality.</h2>
          <p className={styles.author}>- DE LA SOUL</p>
        </div>
      </div>

      <div className={styles.questionsContainer}>
        <h2>A Kickstarter project does more than raise money. It builds community around your work.</h2>
        <h3>What can I use Kickstarter to fund?</h3>
        <div>
          <p>Kickstarter is specifically for creative projects in the following categories: Art, Comics, Crafts, Dance, Design, Fashion, Film & Video, Food, Games, Journalism, Music, Photography, Publishing, Technology, and Theater. Make an album, write a book, create an immersive theater experience, score a film — you name it. Read more about our project guidelines.</p>
        </div>
        <h3>Who can I get pledges from?</h3>
        <div>
          <p>Millions of people visit Kickstarter every week, but support always begins with people you know. Friends, fans, and the communities you’re a part of will likely be some of your earliest supporters, not to mention your biggest resources for spreading the word about your project.</p>
        </div>
        <h3>How much work is it to run a project?</h3>
        <div>
          <p>Every Kickstarter project has its share of exhilarating and challenging moments, but the amount of work generally depends on the size and complexity of the project.</p><br></br>
          <p>Expect the first few days after launch to be very busy as you spread the word to your community, answer questions from potential backers, and more. You may need to spend the last few days rallying your social networks in order to reach your funding goal.</p><br></br>
          <p>Projects sometimes take on a life of their own, and in that case you should expect to spend more time creating and fulfilling rewards.</p>
        </div>
        <h3>How do I get in touch with questions?</h3>
        <div>
          <p>You can reach out with your questions through this contact form. We also recommend taking a look at our FAQs for more detailed information, along with the creator handbook for guidance on starting and running a project.</p>
        </div>
      </div>
    </>
  )
}

export default Learn
