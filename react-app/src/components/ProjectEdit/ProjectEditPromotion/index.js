import promotionStyles from './ProjectEditPromotion.module.css'

function ProjectEditPromotion() {
  return (
    <div>
      <div>
        <div className={promotionStyles.title}>Prepare for launch</div>
        <div className={promotionStyles.subTitle}>Get ready to promote your project.</div>
      </div>
      <div>
        <section>
          <div>
            <div className={promotionStyles.mainInputHeader}>Project URL</div>
            <div className={promotionStyles.mainInputSubHeader}>We'll use your current project title to generate a URL. Even if you change the title later, the URL will stay the same. Your project page won't go live until you launch.</div>
          </div>
          <div></div>
        </section>
        <section>
          <div>
            <div className={promotionStyles.mainInputHeader}>Pre-launch page</div>
            <div className={promotionStyles.mainInputSubHeader}>Your project title, subtitle, and category from the Basics section will automatically appear on this page. Potential backers will be able to find it on Kickstarter, but you should share your pre-launch page with everyone to create excitement and attention around your project before you launch it.</div>
          </div>
          <div></div>
        </section>
        <section>
          <div>
            <div className={promotionStyles.mainInputHeader}>Google Analytics</div>
            <div className={promotionStyles.mainInputSubHeader}>This powerful tracking tool offers insight into your project’s performance, including the number of visitors to your page, where they came from, and how many of them convert into pledges.</div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
    )
}

export default ProjectEditPromotion
