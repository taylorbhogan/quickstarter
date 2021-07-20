import ProjectCreateModal from '../ProjectCreateModal';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getProjects } from '../../store/project';


function Learn() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProjects())
  // }, [dispatch])

  return (
    <>
      <h1>Bring your creative project to life.</h1>
      <ProjectCreateModal />
      <div>
        <div>De La Soul raised $600,874 to make their Grammy-winning album, And the Anonymous Nobody..., with full creative control</div>
        <div>
          <div>With the support of 13, 454 backers, Elena Favilli and Francesca Cavallo published Good Night Stories for Rebel Girls - and became best-selling authors.</div>
          <div>Since raising over $300k through seven successful projects, Craighton Berman now runs his own homewares company with his partner, Emily.</div>
        </div>
      </div>
      <div>
        <h2>We see Kickstarter as a home for creative minds and a wonderful platform; where people who believe, respect, and see the vision can support an idea and make it a reality.</h2>
        <p>- DE LA SOUL</p>
      </div>
      <div>
        <h2>A Kickstarter project does more than raise money. It builds community around your work.</h2>
        <div>
          <div>What can I use Kickstarter to fund?</div>
          <div>Kickstarter is specifically for creative projects in the following categories: Art, Comics, Crafts, Dance, Design, Fashion, Film & Video, Food, Games, Journalism, Music, Photography, Publishing, Technology, and Theater. Make an album, write a book, create an immersive theater experience, score a film — you name it. Read more about our project guidelines.</div>
        </div>
        <div>
          <div>Who can I get pledges from?</div>
          <div>Millions of people visit Kickstarter every week, but support always begins with people you know. Friends, fans, and the communities you’re a part of will likely be some of your earliest supporters, not to mention your biggest resources for spreading the word about your project.</div>
        </div>
        <div>
          <div>How much work is it to run a project?</div>
          <div>
            <div>Every Kickstarter project has its share of exhilarating and challenging moments, but the amount of work generally depends on the size and complexity of the project.</div>
            <div>Expect the first few days after launch to be very busy as you spread the word to your community, answer questions from potential backers, and more. You may need to spend the last few days rallying your social networks in order to reach your funding goal.</div>
            <div>Projects sometimes take on a life of their own, and in that case you should expect to spend more time creating and fulfilling rewards.</div>
          </div>
          <div>
            <div>How do I get in touch with questions?</div>
            <div>You can reach out with your questions through this contact form. We also recommend taking a look at our FAQs for more detailed information, along with the creator handbook for guidance on starting and running a project.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Learn
