import styles from "../ProjectEdit.module.css";
import rewardStyles from "./ProjectEditRewards.module.css";
import prevStyles from "../../Project/ProjectBuyReward/ProjectBuyReward.module.css";

import { useState, useEffect } from "react";
import {
  createProjectReward,
  deleteProjectReward,
} from "../../../store/reward";
import { useDispatch, useSelector } from "react-redux";
import { getProjectRewards } from "../../../store/reward";

function ProjectEditRewards({ project }) {
  const dispatch = useDispatch();
  const [rewardTitle, setRewardTitle] = useState("");
  const [rewardPrice, setRewardPrice] = useState(1);
  const [rewardDescription, setRewardDescription] = useState("");
  const [todaysYearMonth, setTodaysYearMonth] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [pickStartDate, setPickStartDate] = useState(false);
  const [rewardEstimatedDelivery, setRewardEstimatedDelivery] = useState("");
  const [rewardQuantity, setRewardQuantity] = useState(null);
  const [showCreateRewardForm, setShowCreateRewardForm] = useState(false);
  const [activeRewards, setActiveRewards] = useState([]);
  const [expiredRewards, setExpiredRewards] = useState([]);
  const [futureRewards, setFutureRewards] = useState([]);
  const [soldOutRewards, setSoldOutRewards] = useState([]);
  const [triggerRerender, setTriggerRerender] = useState(false);
  // const [allRewards, setAllRewards] = useState([]);

  const [errors, setErrors] = useState([]);
  // const [estimatedDelivery, setEstimatedDelivery] = useState("")

  // console.log('*** your rewards!!**', rewards)

  const rewardsForProject = useSelector((state) => state.rewards);

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

  useEffect(() => {
    (async () => {
      const rewardsResponse = await fetch(
        `/api/projects/${project.id}/rewards`
      );
      const rewardsData = await rewardsResponse.json();
      // console.log('rewardsData------------------>', rewardsData);
      // setAllRewards(rewardsData.rewards);
      setActiveRewards(rewardsData.activeRewards);
      setExpiredRewards(rewardsData.expiredRewards);
      setFutureRewards(rewardsData.futureRewards);
      setSoldOutRewards(rewardsData.soldOutRewards);
    })();
  }, [rewardsForProject]);

  const setNoLimit = (e) => {
    setStartDate(null);
    setEndDate(null);

    setPickStartDate(false);
  };

  const togglePickStartDate = (e) => setPickStartDate(true);

  const formatDate = (dateObj) => {
    let date = new Date(dateObj);

    let [month, year] = [date.getMonth(), date.getFullYear()];
    if (month < 10) {
      return `${month + 1}-${year}`;
    }
  };

  const handleQuantityChange = (e) => {
    if (+e.target.value < 0) {
      e.target.value = 1;
    }

    setRewardQuantity(e.target.value);
  };

  const handlePriceChange = (e) => {
    if (+e.target.value < 0) {
      e.target.value = 1;
    }

    setRewardPrice(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    // setEndDate(null)
    setEndDate("");
  };
  const handleDeleteReward = async (e) => {
    e.preventDefault();

    await dispatch(deleteProjectReward(+e.target.id));
    await dispatch(getProjectRewards(project));
  };

  const toggleCreateRewardForm = (e) => {
    e.preventDefault();
    setShowCreateRewardForm(!showCreateRewardForm);
  };

  const handleRewardSubmit = async (e) => {
    e.preventDefault();
    const newReward = {
      title: rewardTitle,
      price: +rewardPrice,
      description: rewardDescription,
      estimated_delivery:
        rewardEstimatedDelivery === "" ? null : rewardEstimatedDelivery,
      project_id: project.id,
      quantity:
        rewardQuantity === "" || +rewardQuantity === 0 ? null : +rewardQuantity,
      start_date: startDate === "" ? null : startDate,
      end_date: endDate === "" ? null : endDate,
    };
    // console.log("THIS IS WHAT YOU'll BE SENDING BACK TO THE DB", newReward)
    // console.log("THIS IS WHAT YOU'll BE SENDING BACK TO THE DB", typeof newReward.price)
    let result = await dispatch(createProjectReward(project, newReward));

    if (result.errors) {
      setErrors(result.errors);
    } else {
      setErrors([]);
      setShowCreateRewardForm(false);
    }

    // console.log("HERE IS YOUR RESULT", result)
    await dispatch(getProjectRewards(project));

    setRewardTitle("");
    setRewardPrice(1);
    setRewardDescription("");
    setRewardEstimatedDelivery("");
    setRewardQuantity("");
    setStartDate(null);
    setEndDate(null);

    setTriggerRerender(!triggerRerender);
    // history.go(0)
  };

  useEffect(() => {
    //cheesy way to force rerender
  }, [triggerRerender]);

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={rewardStyles.title}>Add your rewards</div>
        <div className={rewardStyles.subTitle}>
          Offer simple, meaningful ways to bring backers closer to your project
          and celebrate it coming to life.
        </div>
      </div>
      <div >
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
                special experiences. Make sure to {' '}
                <span className={rewardStyles.link}>
                  set reasonable backer expectations.
                </span>
              </div>
              <div className={rewardStyles.learnMore}>
                Learn about creating and managing rewards
              </div>
            </div>
            <div className={styles.newRewardButtonDiv}>
              <button
                onClick={toggleCreateRewardForm}
                className={styles.newRewardButton}
              >
                + New reward
              </button>
            </div>
          </div>
          <div className={styles.rewardsContainerBottomContent}>
            {showCreateRewardForm && (
              <>
                <div className={styles.formDiv}>
                  {errors &&
                    errors.map((error) => (
                      <div style={{ color: "red" }} key={error}>
                        {error}
                      </div>
                    ))}
                  <form className={rewardStyles.rewardForm}>
                    <div>
                      <div className={rewardStyles.blockWrapper}>
                        <div  className={rewardStyles.labelDiv}>
                          <label>Title</label>
                        </div>
                        <input
                          className={rewardStyles.inputField}
                          placeholder={"Signed limited-edition"}
                          value={rewardTitle}
                          onChange={(e) => setRewardTitle(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className={rewardStyles.blockWrapper}>
                      <div className={rewardStyles.labelDiv}>
                        <label>Amount</label>
                      </div>
                      <div className={rewardStyles.inputDiv}>
                        <div>
                          <div className={rewardStyles.dollahBillsRapper}>
                            <div className={rewardStyles.dollahBills}>$</div>
                          </div>
                          <input
                            type="number"
                            value={rewardPrice}
                            className={rewardStyles.amountInput}
                            // onChange={(e) => setRewardPrice(e.target.value)}
                            onChange={handlePriceChange}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className={rewardStyles.blockWrapper}>
                      <div className={rewardStyles.labelDiv}>
                        <label>Description</label>
                      </div>
                      <textarea
                        className={rewardStyles.textarea}
                        placeholder={"Get an early copy - hot off the presses!"}
                        value={rewardDescription}
                        onChange={(e) => setRewardDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className={rewardStyles.blockWrapper}>
                      <div className={rewardStyles.labelDiv}>
                      <div  className={rewardStyles.labelDiv}>
                        <label>Estimated delivery</label>
                      </div>
                      <div>
                        <small>
                          Give yourself plenty of time. It's better to deliver
                          to backers ahead of schedule than behind.
                        </small>
                      </div>

                      </div>
                      <input
                        className={rewardStyles.dateInputField}
                        type="month"
                        min={todaysYearMonth}
                        value={rewardEstimatedDelivery}
                        onChange={(e) =>
                          setRewardEstimatedDelivery(e.target.value)
                        }
                      ></input>
                    </div>
                    {/* <div>
                      <label>Shipping</label>
                    </div> */}
                    <div>
                      <div className={rewardStyles.blockWrapper}>
                        <div className={rewardStyles.labelDiv}>
                          <label>Reward quantity</label>
                        </div>
                        <input
                          className={rewardStyles.inputField}
                          type="number"
                          value={rewardQuantity}
                          // onChange={e => setRewardQuantity(e.target.value)}
                          onChange={handleQuantityChange}
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className={rewardStyles.labelDiv}>
                        <label>Time limit</label>
                      </div>
                      <div>
                        <div className={rewardStyles.optionSelectorContainer}>
                          <input
                            className={rewardStyles.greenBubble}
                            id="noLimit"
                            type="radio"
                            value=""
                            checked={!pickStartDate ? true : false}
                            onChange={setNoLimit}
                          ></input>
                          <label
                            className={rewardStyles.noLimitLabel}
                            htmlFor="noLimit"
                          >
                            No limit
                          </label>
                        </div>
                        <div className={rewardStyles.optionSelectorContainer}>
                          <input
                            className={rewardStyles.greenBubble}
                            id="chooseDate"
                            type="radio"
                            value=""
                            checked={pickStartDate ? true : false}
                            onChange={togglePickStartDate}
                          ></input>
                          <label
                            htmlFor="chooseDate"
                            className={rewardStyles.noLimitLabel}
                          >
                            Specify Start and End
                          </label>
                        </div>
                        {pickStartDate && (
                          <div>
                            <label>Choose Start Date</label>
                            <input
                              className={rewardStyles.dateInputField}
                              type="month"
                              min={todaysYearMonth}
                              onChange={handleStartDateChange}
                            ></input>
                          </div>
                        )}
                        {startDate && (
                          <div>
                            <label>Choose End Date</label>
                            <input
                              className={rewardStyles.dateInputField}
                              type="month"
                              min={startDate}
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            ></input>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={rewardStyles.blockWrapper}>
                      <button
                        className={rewardStyles.saveRewardButton}
                        onClick={handleRewardSubmit}
                      >
                        Save reward
                      </button>
                      <button className={rewardStyles.cancelButton}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>

                <div className={rewardStyles.previewDiv}>
                  <div className={rewardStyles.previewDivHeader}>Reward preview</div>
                  <div className={rewardStyles.previewDivText}>
                    Get a glimpse of how this reward will look on your project
                    page.
                  </div>
                  <div style={{ position: "sticky", top: "20px" }}>
                    <form
                      style={{ backgroundColor: "#FBFBFA" }}
                      className={rewardStyles.rewardPreview}
                    >
                      <div className={rewardStyles.flexbox}>
                        <div className={prevStyles.price}>
                          Pledge ${rewardPrice} or more
                        </div>
                        <div
                          style={{ marginTop: "15px", marginBottom: "15px" }}
                          className={prevStyles.title}
                        >
                          {rewardTitle}
                        </div>
                        <div
                          style={{ marginTop: "15px", marginBottom: "15px" }}
                          className={prevStyles.description}
                        >
                          {rewardDescription}
                        </div>
                        <div className={rewardStyles.flexbox}>
                          <div className={rewardStyles.previewSeperator}>
                            <div
                              style={{
                                marginTop: "15px",
                                marginBottom: "15px",
                              }}
                              className={prevStyles.littleHeader}
                            >
                              ESTIMATED DELIVERY
                            </div>
                            {/* <div className={styles.estimatedDelivery}>{reward.estimated_delivery}</div> */}
                            <div className={prevStyles.estimatedDelivery}>
                              {rewardEstimatedDelivery}
                            </div>
                          </div>
                          <div>
                            <div
                              style={{
                                marginTop: "15px",
                                marginBottom: "15px",
                              }}
                              className={prevStyles.littleHeader}
                            >
                              Reward Quantity
                            </div>
                            {rewardQuantity > 0 ? (
                              <div className={prevStyles.shipsTo}>
                                {rewardQuantity}
                              </div>
                            ) : (
                              <div className={prevStyles.shipsTo}>
                                UNLIMITED
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <div className={styles.rewardPreviewRectangleContainer}>
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
                  </div> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className={rewardStyles.blockWrapperRewards}>
        <div className={rewardStyles.flexColumnCenter}>
          <div className={rewardStyles.blockWrapperStatus}>
            <h1>Current Rewards:</h1>
          </div>
          {activeRewards.map((reward) => (
            <div key={reward.id}>
              <form
                style={{ width: "448px", backgroundColor: "#FBFBFA" }}
                className={prevStyles.rewardForm}
              >
                <div className={rewardStyles.flexbox}>
                  <div className={prevStyles.price}>
                    Pledge ${reward.price} or more
                  </div>
                  <div
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    className={prevStyles.title}
                  >
                    {reward.title}
                  </div>
                  <div
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    className={prevStyles.description}
                  >
                    {reward.description}
                  </div>
                  <div className={rewardStyles.flexbox}>
                    <div className={rewardStyles.previewSeperator}>
                      <div
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                        className={prevStyles.littleHeader}
                      >
                        ESTIMATED DELIVERY
                      </div>
                      {/* <div className={styles.estimatedDelivery}>{reward.estimated_delivery}</div> */}
                      <div className={prevStyles.estimatedDelivery}>
                        {formatDate(reward.estimated_delivery)}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                        className={prevStyles.littleHeader}
                      >
                        Reward Quantity
                      </div>
                      {reward.quantity > 0 ? (
                        <div className={prevStyles.shipsTo}>
                          {reward.quantity}
                        </div>
                      ) : (
                        <div className={prevStyles.shipsTo}>UNLIMITED</div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className={rewardStyles.cancelButton}
                  id={reward.id}
                  onClick={handleDeleteReward}
                >
                  Delete Reward
                </button>
              </form>
              {/* <div>
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
            </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className={rewardStyles.blockWrapperRewards}>
        <div className={rewardStyles.flexColumnCenter}>
          <div className={rewardStyles.blockWrapperStatus}>
            <h1>Upcoming Rewards:</h1>
          </div>
          {futureRewards.map((reward) => (
            <div key={reward.id}>
              <form
                style={{ width: "448px", backgroundColor: "#FBFBFA" }}
                className={prevStyles.rewardForm}
              >
                <div className={rewardStyles.flexbox}>
                  <div className={prevStyles.price}>
                    Pledge ${reward.price} or more
                  </div>
                  <div
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    className={prevStyles.title}
                  >
                    {reward.title}
                  </div>
                  <div
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    className={prevStyles.description}
                  >
                    {reward.description}
                  </div>
                  <div className={rewardStyles.flexbox}>
                    <div className={rewardStyles.previewSeperator}>
                      <div
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                        className={prevStyles.littleHeader}
                      >
                        ESTIMATED DELIVERY
                      </div>
                      {/* <div className={styles.estimatedDelivery}>{reward.estimated_delivery}</div> */}
                      <div className={prevStyles.estimatedDelivery}>
                        {formatDate(reward.estimated_delivery)}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                        className={prevStyles.littleHeader}
                      >
                        Reward Quantity
                      </div>
                      {reward.quantity > 0 ? (
                        <div className={prevStyles.shipsTo}>
                          {reward.quantity}
                        </div>
                      ) : (
                        <div className={prevStyles.shipsTo}>UNLIMITED</div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className={rewardStyles.cancelButton}
                  id={reward.id}
                  onClick={handleDeleteReward}
                >
                  Delete Reward
                </button>
              </form>
              {/* <div>
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
            </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className={rewardStyles.blockWrapperRewards}>
        <div className={rewardStyles.flexColumnCenter}>
          <div className={rewardStyles.blockWrapperStatus}>
            <h1>Sold out Rewards:</h1>
          </div>
          {soldOutRewards.map((reward) => (
            <div key={reward.id}>
              <form
                style={{ width: "448px", backgroundColor: "#FBFBFA" }}
                className={prevStyles.rewardForm}
              >
                <div className={rewardStyles.flexbox}>
                  <div className={prevStyles.price}>
                    Pledge ${reward.price} or more
                  </div>
                  <div
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    className={prevStyles.title}
                  >
                    {reward.title}
                  </div>
                  <div
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    className={prevStyles.description}
                  >
                    {reward.description}
                  </div>
                  <div className={rewardStyles.flexbox}>
                    <div className={rewardStyles.previewSeperator}>
                      <div
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                        className={prevStyles.littleHeader}
                      >
                        ESTIMATED DELIVERY
                      </div>
                      {/* <div className={styles.estimatedDelivery}>{reward.estimated_delivery}</div> */}
                      <div className={prevStyles.estimatedDelivery}>
                        {formatDate(reward.estimated_delivery)}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                        className={prevStyles.littleHeader}
                      >
                        Reward Quantity
                      </div>
                      {reward.quantity > 0 ? (
                        <div className={prevStyles.shipsTo}>
                          {reward.quantity}
                        </div>
                      ) : (
                        <div className={prevStyles.shipsTo}>SOLD OUT</div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className={rewardStyles.cancelButton}
                  id={reward.id}
                  onClick={handleDeleteReward}
                >
                  Delete Reward
                </button>
              </form>
              {/* <div>
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
            </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className={rewardStyles.blockWrapperRewards}>
        <div className={rewardStyles.flexColumnCenter}>
          <div className={rewardStyles.blockWrapperStatus}>
            <h1>Expired Rewards:</h1>
          </div>
          {expiredRewards.map((reward) => (
            <div key={reward.id}>
              <form
                style={{ width: "448px", backgroundColor: "#FBFBFA" }}
                className={prevStyles.rewardForm}
              >
                <div className={rewardStyles.flexbox}>
                  <div className={prevStyles.price}>
                    Pledge ${reward.price} or more
                  </div>
                  <div
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    className={prevStyles.title}
                  >
                    {reward.title}
                  </div>
                  <div
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                    className={prevStyles.description}
                  >
                    {reward.description}
                  </div>
                  <div className={rewardStyles.flexbox}>
                    <div className={rewardStyles.previewSeperator}>
                      <div
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                        className={prevStyles.littleHeader}
                      >
                        ESTIMATED DELIVERY
                      </div>
                      {/* <div className={styles.estimatedDelivery}>{reward.estimated_delivery}</div> */}
                      <div className={prevStyles.estimatedDelivery}>
                        {formatDate(reward.estimated_delivery)}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                        className={prevStyles.littleHeader}
                      >
                        Reward Quantity
                      </div>
                      {reward.quantity > 0 ? (
                        <div className={prevStyles.shipsTo}>
                          {reward.quantity}
                        </div>
                      ) : (
                        <div className={prevStyles.shipsTo}>UNLIMITED</div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className={rewardStyles.cancelButton}
                  id={reward.id}
                  onClick={handleDeleteReward}
                >
                  Delete Reward
                </button>
              </form>
              {/* <div>
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
            </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className={rewardStyles.spacer}></div>
    </div>
  );
}

export default ProjectEditRewards;
