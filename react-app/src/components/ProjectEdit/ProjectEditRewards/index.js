import styles from "../ProjectEdit.module.css";
import { useState, useEffect } from "react";
import { createProjectReward, deleteProjectReward } from "../../../store/reward";
import { useDispatch, useSelector } from "react-redux";
import { getProjectRewards } from '../../../store/reward'

function ProjectEditRewards({ project, rewards }) {
  const dispatch = useDispatch();
  const [rewardTitle, setRewardTitle] = useState("");
  const [rewardPrice, setRewardPrice] = useState(1);
  const [rewardDescription, setRewardDescription] = useState("");
  const [todaysYearMonth, setTodaysYearMonth] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [pickStartDate, setPickStartDate] = useState(false)
  const [rewardEstimatedDelivery, setRewardEstimatedDelivery] = useState('')
  const [rewardQuantity, setRewardQuantity] = useState(null)
  const [showCreateRewardForm, setShowCreateRewardForm] = useState(false)
  // const [estimatedDelivery, setEstimatedDelivery] = useState("")

  // console.log('*** your rewards!!**', rewards)
  const rewardsForProject = useSelector(state => Object.values(state.rewards))

  useEffect(() => {
    const getTodaysDate = () => {
      const todaysDate = new Date();
      let [month, year] = [todaysDate.getMonth(), todaysDate.getFullYear()];
      if (month < 10) {
        return `${year}-0${month + 1}`;
      } else {
        return `${year}-${month + 1}`;
      }
    };
    setTodaysYearMonth(getTodaysDate());


    // console.log(getTodaysDate());
  }, []);

  const setNoLimit = e => {
    setStartDate(null)
    setEndDate(null)

    setPickStartDate(false)
  }

  const togglePickStartDate = e => setPickStartDate(true)


  const handleStartDateChange = e => {
    setStartDate(e.target.value)
    // setEndDate(null)
    setEndDate('')

    // setEndDate(null)
    // console.log("this is end date", endDate)
    // console.log("this is start date", startDate)

  }
  const handleDeleteReward = async (e) => {
    e.preventDefault()

    await dispatch(deleteProjectReward(+e.target.id))
    await dispatch(getProjectRewards(project))

  }

  const toggleCreateRewardForm = (e) => {
    e.preventDefault()
    setShowCreateRewardForm(!showCreateRewardForm)
  }

  const handleRewardSubmit = async (e) => {
    e.preventDefault();
    const newReward = {
      title: rewardTitle,
      price: rewardPrice,
      description: rewardDescription,
      estimated_delivery: rewardEstimatedDelivery === '' ? null : rewardEstimatedDelivery,
      project_id: project.id,
      quantity: rewardQuantity === '' ? null : +rewardQuantity,
      start_date: startDate === '' ? null : startDate,
      end_date: endDate === '' ? null : endDate
    };
    // console.log("THIS IS WHAT YOU'll BE SENDING BACK TO THE DB", newReward)
    await dispatch(createProjectReward(project, newReward))
    await dispatch(getProjectRewards(project))
    setRewardTitle('')
    setRewardPrice(1)
    setRewardDescription('')
    setRewardEstimatedDelivery('')
    setRewardQuantity('')
    setStartDate(null)
    setEndDate(null)



  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.editPageHeader}>Add your rewards</h1>
        <h2>
          Offer simple, meaningful ways to bring backers closer to your project
          and celebrate it coming to life.
        </h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.rewardsContainer}>
          <nav className={styles.rewardsMenu}>
            <div className={styles.rewardsTiersDiv}>
              <div className={styles.presentIcon}></div>
              <div className={styles.rewardsMenuHeader}>Reward tiers</div>
            </div>
          </nav>
          <div className={styles.rewardsContainerTopContent}>
            <div className={styles.textDivs}>
              <div>
                Most creators offer 3-10 rewards, which can be physical items or
                special experiences. Make sure to set reasonable backer
                expectations.
              </div>
              <div className={styles.learnMore}>
                Learn about creating and managing rewards
              </div>
              <div className={styles.infoDiv}>
                <div>Add a reward</div>
                <div>
                  Offer tangible or intangible things that bring backers closer
                  to your project
                </div>
              </div>
            </div>
            <div className={styles.newRewardButtonDiv}>
              <button onClick={toggleCreateRewardForm} className={styles.newRewardButton}>+ New reward</button>
            </div>
          </div>
          <div className={styles.rewardsContainerBottomContent}>
            {showCreateRewardForm &&
              <>
                <div className={styles.formDiv}>
                  <form>
                    <div>
                      <label>Title</label>
                      <input
                        placeholder={"Signed limited-edition"}
                        value={rewardTitle}
                        onChange={(e) => setRewardTitle(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label>Price</label>
                      <input
                        type="number"
                        value={rewardPrice}
                        onChange={(e) => setRewardPrice(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label>Description</label>
                      <textarea
                        placeholder={"Get an early copy - hot off the presses!"}
                        value={rewardDescription}
                        onChange={(e) => setRewardDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label>Estimated delivery</label>
                      <input type="month" min={todaysYearMonth} value={rewardEstimatedDelivery} onChange={e => setRewardEstimatedDelivery(e.target.value)}></input>
                      <p>
                        Give yourself plenty of time. It's better to deliver to
                        backers ahead of schedule than behind.
                      </p>
                      <div>Date inputs go here</div>
                    </div>
                    <div>
                      <label>Shipping</label>
                    </div>
                    <div>
                      <label>Reward quantity</label>
                      <input type="number" value={rewardQuantity} onChange={e => setRewardQuantity(e.target.value)}></input>
                    </div>
                    <div>
                      <label>Time limit</label>
                      <div>
                        <label>No limit</label>
                        <input type="radio" value="" checked={!pickStartDate ? true : false}
                          onChange={setNoLimit}
                        ></input>
                        <br></br>
                        <label>Specify Start and End</label>
                        <input type="radio" value="" checked={pickStartDate ? true : false}
                          onChange={togglePickStartDate}
                        ></input>
                        {pickStartDate &&
                          <div>
                            <label>Choose Start Date</label>
                            <input type="month" min={todaysYearMonth}
                              onChange={handleStartDateChange}

                            ></input>
                          </div>
                        }
                        {startDate &&
                          <div>
                            <label>Choose End Date</label>
                            <input type="month" min={startDate} value={endDate}
                              onChange={e => setEndDate(e.target.value)}
                            ></input>
                          </div>
                        }

                      </div>
                    </div>
                    <button
                      className={styles.saveRewardButton}
                      onClick={handleRewardSubmit}
                    >
                      Save reward
                    </button>
                    <button className={styles.cancelRewardButton}>Cancel</button>
                  </form>
                </div>

                <div className={styles.previewDiv}>
                  <div>Reward preview</div>
                  <div>
                    Get a glimpse of how this reward will look on your project page.
                  </div>
                  <div className={styles.rewardPreviewRectangleContainer}>
                    <div className={styles.rewardAmountPreview}>Pledge or more</div>
                    <div className={styles.rewardsTitlePreview}></div>
                    <div className={styles.rewardsDescriptionPreview}></div>
                    <div className={styles.rewardsPreviewHeader}>
                      ESTIMATED DELIVERY:
                    </div>
                    <div
                      className={`${styles.rewardsEstimatedDeliveryPreview} ${styles.rewardsPreviewDisplay}`}
                    ></div>
                    <div className={styles.rewardsPreviewHeader}>SHIPS TO</div>
                    <div
                      className={`${styles.rewardsShipsToPreview} ${styles.rewardsPreviewDisplay}`}
                    ></div>
                    <div className={styles.rewardsPreviewHeader}>
                      REWARD QUANTITY
                    </div>
                    <div
                      className={`${styles.rewardsQuantityPreview} ${styles.rewardsPreviewDisplay}`}
                    ></div>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
      <div>
        <h1>Current Rewards:</h1>
        {rewards.map(reward => (
          <div key={reward.id}>
            <div>
              {reward.title}
            </div>
            <div>
              Description: {reward.description}
            </div>
            <div>
              Price: {reward.price}
            </div>
            <div>
              estimated_delivery: {reward.estimated_delivery}
            </div>
            <div>
              estimated_delivery: {reward.estimated_delivery}
            </div>
            <div>
              {reward.quantity ? `Remaining inventory: ${reward.quantity}` : "In stock"}
            </div>
            <div>
              {reward.backers.length > 0 ? `Number of purchases: ${reward.backers.length}` : 'Nobody has purchased this reward yet'}
            </div>
            <button id={reward.id} onClick={handleDeleteReward}>Delete Reward</button>
          </div>
        ))}
      </div>
    </div >
  );
}

export default ProjectEditRewards;
