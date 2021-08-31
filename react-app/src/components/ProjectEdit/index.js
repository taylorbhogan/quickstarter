import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProject, deleteProject } from "../../store/project";
import { getCountries } from "../../store/country";
import { getCategories } from "../../store/category";
import { getSubCategories } from "../../store/subCategory";
import { getProjectRewards } from "../../store/reward";
import ProjectEditStory from "./ProjectEditStory";
import ProjectEditRewards from "./ProjectEditRewards";
import ProjectEditPeople from "./ProjectEditPeople";
import ProjectEditPayment from "./ProjectEditPayment";
import ProjectEditPromotion from "./ProjectEditPromotion";
import styles from "./ProjectEdit.module.css";

function Project({ everyProject }) {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [confirmGoLive, setConfirmGoLive] = useState("");

  const [project, setProject] = useState("");
  const [subTitle, setSubTitle] = useState(project.sub_title);
  const [categoryId, setCategoryId] = useState(project.category_id);
  const [countryId, setCountryId] = useState(project.country);
  const [subCategory, setSubCategory] = useState(project.sub_category_id);
  const [title, setTitle] = useState(project.title);
  const [goal, setGoal] = useState(project.funding_goal);
  const [imageUrl, setImageUrl] = useState(project.project_image_url);
  const [awsUrl, setAwsUrl] = useState("");
  const [campaignDuration, setCampaignDuration] = useState(
    project.campaign_duration
  );
  const [saveProjectButtonText, setSaveProjectButtonText] = useState("Save");
  const [deleteProjectButtonText, setDeleteProjectButtonText] =
    useState("Delete Project");

  const [currentSelectedTab, setCurrentSelectedTab] = useState("basics");

  const categories = useSelector((state) => Object.values(state.categories));
  const countries = useSelector((state) => Object.values(state.countries));
  const user = useSelector((state) => state.session.user);
  const subCategories = useSelector((state) =>
    Object.values(state.subCategories)
  );
  const rewardsForProject = useSelector((state) =>
    Object.values(state.rewards)
  );
  // const startingSubCat = subCategories.find(subCat => subCat.category_id === +categoryId)
  const [currentSubCategories, setCurrentSubCategories] = useState([
    subCategories.filter((subCat) => subCat.id === +categoryId),
  ]);
  const [goLiveErrors, setGoLiveErrors] = useState([]);
  // if (subCategories.length) {
  //   let startingSubCats = subCategories.filter(subCat => subCat.category_id === +categoryId)
  //   console.log(startingSubCats)
  // }
  // if (startingSubCats.length) {
  //   setCurrentSubCategories(startingSubCats)
  // }

  // useEffect(()=>{
  //     title
  //     goal
  //     campaignDuration
  //     st
  // })
  if (!everyProject[projectId]) {
    history.push("/");
  }

  const handleGoLiveButton = async (e) => {
    // e.preventDefault()

    (async () => {
      const response = await fetch(`/api/projects/${projectId}`);
      const project = await response.json();
      // console.log("THIS IS WHAT YOU GOT:", project)

      // await setProject(project)
      let errors = [];
      if (!project.title) {
        errors.push("Project must have a title to go live");
      }
      if (!project.sub_title) {
        errors.push("Project must have a sub title to go live");
      }
      if (!project.story) {
        errors.push("Project must have a story to go live");
      }

      if (!project.funding_goal) {
        errors.push("Project must have a funding goal to go live");
      }
      if (!project.project_image_url) {
        errors.push("Project must have an image to go live");
      }
      if (!project.campaign_duration) {
        errors.push("Project must have a valid campaign duration to go live");
      }

      if (errors.length) {
        setGoLiveErrors(errors);
      } else {
        if (confirmGoLive === "Confirm") {
          let projectToGoLive = {
            ...project,
            is_live: true,
            created_at: new Date(),
          };
          let projectAfterGoLive = await dispatch(editProject(projectToGoLive));
          // console.log("*DID THIS GO LIVE? SHOULD BE YES*", projectAfterGoLive)
          history.push(`/projects/${projectToGoLive.id}`);
        } else {
          setConfirmGoLive("Confirm");
          setTimeout(() => {
            setConfirmGoLive("");
          }, 10000);
        }
      }
    })();
  };

  const handlingChangingCampaignDuration = (e) => {
    if (+e.target.value < 0) {
      e.target.value = project.campaign_duration;
    }

    setCampaignDuration(e.target.value);
    // console.log('string:', e.target.value)
    // console.log('num:' + e.target.value)
    // console.log(typeof +e.target.value)
    // console.log(typeof +e.target.value.length)
    // console.log(+e.target.value < 0)
    // if (+e.target.value < 0) {
    //     console.log('hello')
    // }
    // if (+campaignDuration < 0) {
    //     setCampaignDuration('')
    // }
  };

  useEffect(() => {
    // console.log('IF THIS IS', project.project_image_url)
    if (imageUrl != project.project_image_url) {
      const formData = new FormData();
      formData.append("image", imageUrl);
      console.log(formData.get("image"));
      (async () => {
        const response = await fetch("/api/images", {
          method: "POST",
          body: formData,
        });
        const url = await response.json();
        setAwsUrl(url.url);
      })();
    }
  }, [imageUrl]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/projects/${projectId}`);
      const project = await response.json();
      // console.log(project)

      await setProject(project);
      if (user.id != project.user_id) {
        history.push(`/projects/${projectId}`);
      }
      await dispatch(getCountries());
      await dispatch(getCategories());
      await dispatch(getSubCategories());
      await dispatch(getProjectRewards(project));
      if (project.is_live) setCurrentSelectedTab("rewards");
      // ** USE THIS WHEN IMPLEMENTING GO LIVE LOCKS
      await setTitle(project.title);
      await setGoal(project.funding_goal);
      await setImageUrl(project.project_image_url);
      await setCampaignDuration(project.campaign_duration);
      await setSubTitle(project.sub_title);
      await setCountryId(project.country_id);
      await setSubCategory(project.sub_category_id);
      if (categoryId !== project.category_id) {
        await setCategoryId(project.category_id);
      }
      // if (categoryId != project.category_id) {
      let subCatArray = await subCategories.filter(
        (subCat) => subCat.category_id === +categoryId
      );
      await setCurrentSubCategories(subCatArray);
      // }
      // await setCurrentSubCategories(['testy'])
    })();
    // }, [categoryId])
  }, []);
  // useEffect(() => {
  // }, [categoryId])

  useEffect(() => {
    dispatch(getSubCategories());
    // if (categoryId != project.category_id) {

    let subCatArray = subCategories.filter(
      (subCat) => subCat.category_id === +categoryId
    );
    // subCategories.forEach(subCat => console.log(subCat))
    setCurrentSubCategories(subCatArray);
    if (subCategories.length) {
      let initialSubCatValue = null;
      if (project.sub_category_id) {
        let initialSubCatValue = subCategories.find(
          (sc) => sc.id === project.sub_category_id
        );
        // console.log("INITIAL SUBCAT!!!", initialSubCatValue)
      }
      // console.log("INITIAL SUBCAT!!!", initialSubCatValue)
    }
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const errors = [];
    // const formData = new FormData();
    // formData.append("image", imageUrl);
    // console.log(formData.get('image'), "!!!!!!!!!!************$$$$$$$$$$$$$$$$")
    const newProject = {
      ...project,
      user_id: user.id,
      title,
      sub_title: subTitle,
      category_id: +categoryId,
      sub_category_id: subCategory === "" ? null : +subCategory,
      country_id: countryId,
      project_image_url: awsUrl ? awsUrl : imageUrl,
      // project_image_url: awsUrl,
      campaign_duration:
        campaignDuration === "" ||
        campaignDuration === null ||
        campaignDuration < 0
          ? null
          : +campaignDuration,
      funding_goal: goal === "" || goal === null || goal <= 0 ? 0 : +goal,

      // category: categoryId,
      // country: countryId,
    };

    // console.log('THIS IS THE THING YOU"RE SENDING BACK **************', subCategory)
    // console.log('THIS IS THE THING YOU"RE SENDING BACK **************', newProject)
    // TODO: implement the API route to handle the fetch request from editProject in the store in project.js

    let editedProject = await dispatch(editProject(newProject));
    if (editedProject) {
      setErrors(editedProject);
    }
    // console.log("************", editedProject)
    if (!editedProject) {
      setSaveProjectButtonText("Project Saved!");
      setTimeout(() => {
        setSaveProjectButtonText("Save");
      }, 2000);
      // let updatedProj = await dispatch(getProjectRewards(project))
      // await setProject(updatedProj)
      // history.push(`/projects/${projectId}`);
      history.go(0);
    }
  };

  const handleChangingGoal = (e) => {
    if (+e.target.value < 1) {
      e.target.value = project.funding_goal;
    }

    setGoal(e.target.value);
  };

  const handleDelete = async (projectId) => {
    if (deleteProjectButtonText === "Confirm") {
      const deletedProject = await dispatch(deleteProject(projectId));
      if (deletedProject) {
        history.push(`/`);
        window.scroll(0, 0);
      }
    } else {
      setDeleteProjectButtonText("Confirm");
      setTimeout(() => {
        setDeleteProjectButtonText("Delete Project");
      }, 10000);
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImageUrl(file);
  };

  const [titleIsFocused, setTitleIsFocused] = useState(false);
  const [subTitleIsFocused, setSubTitleIsFocused] = useState(false);

  const wordCountHandler = (input, short, mid, long) => {
    let text = "";

    if (input !== null) {
      if (input.length < short) {
        text = "";
      } else if (input.length >= short && input.length < mid) {
        text = "Short and sweet.";
      } else if (input.length >= mid && input.length < long) {
        text = "Not too short, not too long.";
      } else {
        text = "You've hit the limit.";
      }
    }

    return (
      <>
        <div>
          <div>{text}</div>
        </div>
        <div>
          <span>{!input ? "0" : input.length}</span>
          <span>/{long}</span>
        </div>
      </>
    );
  };

  const dashBoardContent = () => {
    if (currentSelectedTab === "basics") {
      return (
        <div className={styles.oneHundred}>
          <div>
            <h1 className={styles.title}>Start with the basics</h1>
            <h2 className={styles.subtitle}>
              Make it easy for people to learn about your project.
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.blockWrapper}>
              <div className={styles.block}>
                <div className={styles.blockLeft}>
                  <div className={styles.mainInputHeader}>Project title</div>
                  <div className={styles.mainInputSubHeader}>
                    Write a clear, brief title that helps people quickly
                    understand the gist of your project.
                  </div>
                  {errors &&
                    errors.map((error, ind) => (
                      <div style={{ color: "red" }} key={ind}>
                        {error}
                      </div>
                    ))}
                </div>
                <div className={styles.blockRightTitle}>
                  <div>
                    <label className={styles.label}>Title</label>
                    <input
                      className={styles.formInput}
                      value={title}
                      type="text"
                      placeholder={"The Community Microscope Kit"}
                      maxLength="60"
                      onChange={(e) => setTitle(e.target.value)}
                      onFocus={() => setTitleIsFocused(true)}
                      onBlur={() => setTitleIsFocused(false)}
                    ></input>
                    <div className={styles.wordCountContainer}>
                      {titleIsFocused && wordCountHandler(title, 4, 31, 60)}
                    </div>
                  </div>
                  <br />
                  <div>
                    <div>
                      <label className={styles.label}>Subtitle</label>
                      <textarea
                        className={styles.formInput}
                        value={subTitle}
                        placeholder={
                          "Explore the invisible microscopic world around you with an affordable microscope kit you construct yourself."
                        }
                        maxLength="135"
                        onChange={(e) => setSubTitle(e.target.value)}
                        onFocus={() => setSubTitleIsFocused(true)}
                        onBlur={() => setSubTitleIsFocused(false)}
                      ></textarea>
                      <div className={styles.wordCountContainer}>
                        {subTitleIsFocused &&
                          wordCountHandler(subTitle, 4, 81, 135)}
                      </div>
                    </div>
                  </div>
                  <div className={styles.impression}>
                    <span>
                      <i className="fas fa-lightbulb" />
                    </span>
                    <span>
                      {" "}
                      Give backers the best first impression of your project
                      with great titles.{" "}
                    </span>
                    <span className={styles.learnMore}>Learn more...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blockWrapper}>
              <div className={styles.block}>
                <div className={styles.blockLeft}>
                  <div className={styles.mainInputHeader}>Project category</div>
                  <div className={styles.mainInputSubHeader}>
                    Choose the category that most closely aligns with your
                    project.
                  </div>
                  <div className={styles.mainInputSubHeader}>
                    Think of where backers may look to find it. Reach a more
                    specific community by also choosing a subcategory.
                  </div>
                  <div className={styles.mainInputSubHeader}>
                    You’ll be able to change the category and subcategory even
                    after your project is live.
                  </div>
                </div>
                <div className={styles.blockRight}>
                  <div>
                    <div className={styles.inputLabels}>
                      <label>Select a Category</label>
                    </div>
                    <select
                      className={styles.formInput}
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option value={category.id} key={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <br />
                  <div className={styles.inputLabels}>
                    <label>Select a Sub-Category</label>
                  </div>
                  <select
                    className={styles.formInput}
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                  >
                    {/* the option below allows for a nullable subcat do not delete*/}
                    <option></option>
                    {currentSubCategories.map((subCategory) => (
                      <option value={subCategory.id} key={subCategory.id}>
                        {subCategory.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.blockWrapper}>
              <div className={styles.block}>
                <div className={styles.blockLeft}>
                  <div className={styles.mainInputHeader}>Project location</div>
                  <div className={styles.mainInputSubHeader}>
                    Enter the location that best describes where your project is
                    based.
                  </div>
                </div>
                <div className={styles.blockRight}>
                  <div className={styles.inputLabels}>
                    <label>Select a Location</label>
                  </div>
                  <select
                    className={styles.formInput}
                    value={countryId}
                    onChange={(e) => setCountryId(e.target.value)}
                  >
                    {countries.map((country) => (
                      <option value={country.id} key={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.blockWrapper}>
              <div className={styles.block}>
                <div className={styles.blockLeft}>
                  <div className={styles.mainInputHeader}>Project image</div>
                  <div className={styles.mainInputSubHeader}>
                    Add an image that clearly represents your project. Choose
                    one that looks good at different sizes—it’ll appear on your
                    project page, across the Quickstarter website and mobile
                    apps, and (when shared) on social channels.
                  </div>
                  <div className={styles.mainInputSubHeader}>
                    Your image should be at least 1024x576 pixels. It will be
                    cropped to a 16:9 ratio.
                  </div>
                  <div className={styles.mainInputSubHeader}>
                    Avoid images with banners, badges, or text—they are
                    illegible at smaller sizes, can be penalized by the Facebook
                    algorithm, and decrease your chances of getting Quickstarter
                    homepage and newsletter features.
                  </div>
                </div>
                <div className={styles.blockRight}>
                  <div className={styles.inputLabels}>
                    <label>Image</label>
                  </div>
                  {/* <input
                    className={styles.formInput}
                    value={imageUrl}
                    type="text"
                    placeholder={"enter your image url here"}
                    onChange={(e) => setImageUrl(e.target.value)}
                  ></input> */}
                  <input type="file" accept="image/*" onChange={updateImage} />
                </div>
              </div>
            </div>
            <div className={styles.blockWrapper}>
              <div className={styles.block}>
                <div className={styles.blockLeft}>
                  <div className={styles.mainInputHeader}>Funding goal</div>
                  <div className={styles.mainInputSubHeader}>
                    Set an achievable goal that covers what you need to complete
                    your project.
                  </div>
                  <div className={styles.mainInputSubHeader}>
                    Funding is all-or-nothing. If you don’t meet your goal, you
                    won’t receive any money.
                  </div>
                </div>
                <div className={styles.blockRight}>
                  <label className={styles.label}>Goal amount</label>
                  <input
                    className={styles.formInput}
                    value={goal}
                    // type="text"
                    type="number"
                    placeholder={"$50,000"}
                    onChange={handleChangingGoal}
                  ></input>
                </div>
              </div>
            </div>
            <div className={styles.blockWrapper}>
              <div className={styles.block}>
                <div className={styles.blockLeft}>
                  <div className={styles.mainInputHeader}>
                    Campaign duration
                  </div>
                  <div className={styles.mainInputSubHeader}>
                    Set a time limit for your campaign. You won’t be able to
                    change this after you launch.
                  </div>
                </div>
                <div className={styles.blockRight}>
                  <label className={styles.label}>Enter number of days</label>
                  <input
                    className={styles.formInput}
                    value={campaignDuration}
                    // type="text"
                    type="number"
                    placeholder={"30"}
                    // onChange={(e) => setCampaignDuration(e.target.value)}
                    onChange={handlingChangingCampaignDuration}
                  ></input>
                </div>
              </div>
            </div>
            <div className={styles.bottomSaveButtonWrapper}>
              <button className={styles.bottomSaveButton} type="submit">
                {saveProjectButtonText}
              </button>
            </div>
          </form>
          <div className={styles.bottomDeleteButtonWrapper}>
            {/* <button
              onClick={() => handleDelete(projectId)}
              className={styles.bottomDeleteButton}
            >
              {deleteProjectButtonText}
            </button> */}
          </div>
        </div>
      );
    } else if (currentSelectedTab === "story") {
      return <ProjectEditStory project={project} />;
    } else if (currentSelectedTab === "rewards") {
      return (
        <ProjectEditRewards project={project} rewards={rewardsForProject} />
      );
    } else if (currentSelectedTab === "people") {
      return <ProjectEditPeople project={project} />;
    } else if (currentSelectedTab === "payment") {
      return <ProjectEditPayment project={project} />;
    } else if (currentSelectedTab === "promotion") {
      return <ProjectEditPromotion project={project} />;
    }
  };

  const tabStyleHandler = (tab) => {
    if (currentSelectedTab === tab) {
      return {
        borderBottom: "3px solid rgb(34, 205, 123)",
        fontWeight: "normal",
      };
    }
    return { borderBottom: "3px solid white" };
  };

  return (
    <div className={styles.dashBoardContentAndMenu}>
      <div className={styles.wholeMenu}>
        <div className={styles.topMenu}>
          <div className={styles.topLeft}>
            <Link to="/">
              <div className={styles.logoDiv}>QUICKSTARTER</div>
            </Link>
            {project.is_live && (
              <div className={styles.backButtonDiv}>
                <Link
                  to={`/projects/${projectId}`}
                  className={styles.backButton}
                >
                  <span className={styles.backButtonIcon}>
                    <i className="fas fa-long-arrow-alt-left" />
                  </span>
                  View Project
                </Link>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {deleteProjectButtonText === "Confirm" && (
              <div
                className={styles.impression}
                style={{
                  marginBottom: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>
                  <i class="fas fa-lightbulb"></i>
                </span>
                <span style={{ marginLeft: "3px" }}>
                  {" "}
                  Are you sure? This action will permanently delete your
                  project. Click to confirm.{" "}
                </span>
              </div>
            )}
            {confirmGoLive === "Confirm" && (
              <div
                className={styles.impression}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>
                  <i class="fas fa-lightbulb"></i>
                </span>
                <span style={{ marginLeft: "3px" }}>
                  {" "}
                  Ready to go live? You will no longer be able to edit project
                  Basics/Story. You will maintain access to Rewards. Click to
                  confirm!{" "}
                </span>
              </div>
            )}
          </div>
          <div className={styles.topRight}>
            <div
              className={styles.buttonDiv}
              style={project.is_live ? { width: "100%" } : null}
            >
              {/* <Link to="/"> */}
              <button
                className={styles.cancelButton}
                onClick={() => handleDelete(projectId)}
              >
                {deleteProjectButtonText}
              </button>
              {/* </Link> */}
            </div>
            {!project?.is_live && (
              <div className={styles.buttonDiv}>
                <button
                  onClick={handleGoLiveButton}
                  className={styles.saveButton}
                >
                  {confirmGoLive ? "Confirm" : "Go Live"}
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          {goLiveErrors &&
            goLiveErrors.map((error) => <div key={error}>{error}</div>)}
        </div>
        <div className={styles.tabMenuWrapper}>
          <div className={styles.tabMenu}>
            <div
              className={styles.tabDiv}
              // onClick={(e) => setCurrentSelectedTab("basics")}
              onClick={(e) =>
                setCurrentSelectedTab(!project.is_live ? "basics" : "rewards")
              }
              // EXAMPLE OF BUTTON LOCK, YOU CAN USE THIS TO STOP EDITS WHEN IS_LIVE

              style={tabStyleHandler("basics")}
            >
              <div>✍️</div>
              <div>Basics</div>
            </div>
            <div
              className={styles.tabDiv}
              onClick={(e) => setCurrentSelectedTab("rewards")}
              style={tabStyleHandler("rewards")}
            >
              <div>🎁</div>
              <div>Rewards</div>
            </div>
            <div
              className={styles.tabDiv}
              // onClick={(e) => setCurrentSelectedTab("story")}
              onClick={(e) =>
                setCurrentSelectedTab(!project.is_live ? "story" : "rewards")
              }
              // EXAMPLE OF BUTTON LOCK, YOU CAN USE THIS TO STOP EDITS WHEN IS_LIVE

              style={tabStyleHandler("story")}
            >
              <div>📖</div>
              <div> Story</div>
            </div>
            <div
              className={styles.tabDiv}
              onClick={(e) => setCurrentSelectedTab("people")}
              style={tabStyleHandler("people")}
            >
              <div>👥</div>
              <div>People</div>
            </div>
            <div
              className={styles.tabDiv}
              onClick={(e) => setCurrentSelectedTab("payment")}
              style={tabStyleHandler("payment")}
            >
              <div>💰</div>
              <div>Payment</div>
            </div>
            <div
              className={styles.tabDiv}
              onClick={(e) => setCurrentSelectedTab("promotion")}
              style={tabStyleHandler("promotion")}
            >
              <div>📢</div>
              <div>Promotion</div>
            </div>
          </div>
        </div>
        {!project?.is_live && (
          <div className={styles.noteSection}>
            <div className={styles.impression}>
              <span>
                <i class="fas fa-lightbulb"></i>
              </span>
              <span>
                {" "}
                Note: Your project is not yet live. Your project will not be
                displayed publicly.{" "}
              </span>
            </div>
          </div>
        )}
      </div>
      {dashBoardContent()}
    </div>
  );
}
export default Project;
