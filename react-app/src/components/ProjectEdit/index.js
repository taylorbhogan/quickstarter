import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editProject, deleteProject } from '../../store/project'
import { getCountries } from '../../store/country'
import { getCategories } from '../../store/category'
import { getSubCategories } from '../../store/subCategory'
import { getProjectRewards } from '../../store/reward'
import ProjectEditStory from './ProjectEditStory'
import ProjectEditRewards from './ProjectEditRewards'
import ProjectEditPeople from './ProjectEditPeople'
import ProjectEditPayment from './ProjectEditPayment'
import ProjectEditPromotion from './ProjectEditPromotion'
import styles from './ProjectEdit.module.css'


function Project() {
    const { projectId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([])

    const [project, setProject] = useState('')
    const [subTitle, setSubTitle] = useState(project.sub_title)
    const [categoryId, setCategoryId] = useState(project.category_id)
    const [countryId, setCountryId] = useState(project.country)
    const [subCategory, setSubCategory] = useState(project.sub_category_id)
    const [title, setTitle] = useState(project.title)
    const [goal, setGoal] = useState(project.funding_goal)
    const [imageUrl, setImageUrl] = useState(project.project_image_url)
    const [campaignDuration, setCampaignDuration] = useState(project.campaign_duration)
    const [saveProjectButtonText, setSaveProjectButtonText] = useState('Save')

    const [currentSelectedTab, setCurrentSelectedTab] = useState('basics')

    const categories = useSelector(state => Object.values(state.categories));
    const countries = useSelector(state => Object.values(state.countries));
    const user = useSelector(state => state.session.user);
    const subCategories = useSelector(state => Object.values(state.subCategories));
    const rewardsForProject = useSelector(state => Object.values(state.rewards))
    // const startingSubCat = subCategories.find(subCat => subCat.category_id === +categoryId)
    const [currentSubCategories, setCurrentSubCategories] = useState([subCategories.filter(subCat => subCat.id === +categoryId)])
    const [goLiveErrors, setGoLiveErrors] = useState([])
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

    const handleGoLiveButton = async (e) => {
        // e.preventDefault()

        (async () => {
            const response = await fetch(`/api/projects/${projectId}`);
            const project = await response.json();
            console.log("THIS IS WHAT YOU GOT:", project)


            // await setProject(project)
            let errors = []
            if (!project.title) {
                errors.push('Project must have a title to go live')
            }
            if (!project.sub_title) {
                errors.push('Project must have a sub title to go live')
            }
            if (!project.story) {
                errors.push('Project must have a story to go live')
            }

            if (!project.funding_goal) {
                errors.push('Project must have a funding goal to go live')
            }
            if (!project.project_image_url) {
                errors.push('Project must have an image to go live')
            }
            if (!project.campaign_duration) {
                errors.push('Project must have a valid campaign duration to go live')
            }

            if (errors.length) {
                setGoLiveErrors(errors)
            } else {
                let projectToGoLive = {
                    ...project,
                    is_live: true
                }
                let projectAfterGoLive = await dispatch(editProject(projectToGoLive))
                // console.log("*DID THIS GO LIVE? SHOULD BE YES*", projectAfterGoLive)
                history.push(`/projects/${projectToGoLive.id}`)
            }



        })();



    }

    const handlingChangingCampaignDuration = (e) => {
        if (+e.target.value < 0) {
            e.target.value = project.campaign_duration
        }

        setCampaignDuration(e.target.value)
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

    }


    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/projects/${projectId}`);
            const project = await response.json();
            // console.log(project)
            await setProject(project);
            await dispatch(getCountries())
            await dispatch(getCategories())
            await dispatch(getSubCategories())
            await dispatch(getProjectRewards(project))
            await setTitle(project.title)
            await setGoal(project.funding_goal)
            await setImageUrl(project.project_image_url)
            await setCampaignDuration(project.campaign_duration)
            await setSubTitle(project.sub_title)
            await setCountryId(project.country_id)
            await setSubCategory(project.sub_category_id)
            if (categoryId !== project.category_id) {
                await setCategoryId(project.category_id)
            }
            // if (categoryId != project.category_id) {
            let subCatArray = await subCategories.filter(subCat => subCat.category_id === +categoryId)
            await setCurrentSubCategories(subCatArray)
            // }
            // await setCurrentSubCategories(['testy'])
        })();
        // }, [categoryId])
    }, [])
    // useEffect(() => {
    // }, [categoryId])

    useEffect(() => {
        dispatch(getSubCategories())
        // if (categoryId != project.category_id) {

        let subCatArray = subCategories.filter(subCat => subCat.category_id === +categoryId)
        // subCategories.forEach(subCat => console.log(subCat))
        setCurrentSubCategories(subCatArray)
        if (subCategories.length) {
            let initialSubCatValue = null
            if (project.sub_category_id) {
                let initialSubCatValue = subCategories.find(sc => sc.id === project.sub_category_id)
                // console.log("INITIAL SUBCAT!!!", initialSubCatValue)
            }
            // console.log("INITIAL SUBCAT!!!", initialSubCatValue)
        }
    }, [categoryId])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const errors = [];
        // console.log("HERE IS YOUR DODO", subCategory)

        const newProject = {
            ...project,
            user_id: user.id,
            title,
            sub_title: subTitle,
            category_id: +categoryId,
            sub_category_id: subCategory === '' ? null : +subCategory,
            country_id: countryId,
            project_image_url: imageUrl,
            campaign_duration: campaignDuration === '' || campaignDuration === null || campaignDuration < 0 ? null : +campaignDuration,
            funding_goal: goal === '' || goal === null || goal <= 0 ? 0 : +goal,

            // category: categoryId,
            // country: countryId,
        }




        // console.log('THIS IS THE THING YOU"RE SENDING BACK **************', subCategory)
        // console.log('THIS IS THE THING YOU"RE SENDING BACK **************', newProject)
        // TODO: implement the API route to handle the fetch request from editProject in the store in project.js
        let editedProject = await dispatch(editProject(newProject))
        if (editedProject) {
            setErrors(editedProject);
        }
        // console.log("************", editedProject)
        if (!editedProject) {
            setSaveProjectButtonText('Project Saved!')
            setTimeout(() => {
                setSaveProjectButtonText('Save')

            }, 2000)
            // let updatedProj = await dispatch(getProjectRewards(project))
            // await setProject(updatedProj)
            // history.push(`/projects/${projectId}`);
            history.go(0);
        }
    }

    const handleDelete = async (projectId) => {
        const deletedProject = await dispatch(deleteProject(projectId))
        if (deletedProject) {
            history.push(`/ discover`);
        }
    }


    const dashBoardContent = () => {
        if (currentSelectedTab === 'basics') {
            return (
                <div>
                    <div>
                        <h1>Start with the basics</h1>
                        <h2>Make it easy for people to learn about your project.</h2>
                    </div>
                    <form
                        onSubmit={handleSubmit}>
                        <div className={styles.blockWrapper}>
                            <div className={styles.block}>
                                <div className={styles.blockLeft}>
                                    <h3>Project title</h3>
                                    <div>Write a clear, brief title that helps people quickly understand the gist of your project.</div>
                                    {errors && errors.map((error, ind) => (
                                        <div style={{ color: "red" }} key={ind}>{error}</div>
                                    ))}
                                </div>
                                <div className={styles.blockRight}>
                                    <div>
                                        <label>Title</label>
                                        <input
                                            className={styles.formInput}
                                            value={title}
                                            type="text"
                                            placeholder={'The Community Microscope Kit'}
                                            onChange={(e) => setTitle(e.target.value)}
                                        ></input>
                                    </div>
                                    <div>
                                        <div>
                                        <label>Subtitle</label>
                                        <textarea
                                            className={styles.formInput}
                                            value={subTitle}
                                            placeholder={'Explore the invisible microscopic world around you with an affordable microscope kit you construct yourself.'}
                                            onChange={(e) => setSubTitle(e.target.value)}
                                        ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blockWrapper}>
                            <div className={styles.block}>
                                <div className={styles.blockLeft}>
                                    <h3>Project category</h3>
                                    <div>Choose the category that most closely aligns with your project.</div>
                                    <div>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.</div>
                                    <div>You’ll be able to change the category and subcategory even after your project is live.</div>
                                </div>
                                <div className={styles.blockRight}>
                                    <select
                                        className={styles.formInput}
                                        value={categoryId}
                                        onChange={(e) => setCategoryId(e.target.value)}
                                        >
                                        {categories.map(category =>
                                            <option
                                            value={category.id}
                                            key={category.id}>{category.name}</option>
                                            )}
                                    </select>
                                    <select
                                        className={styles.formInput}
                                        value={subCategory}
                                        onChange={(e) => setSubCategory(e.target.value)}
                                        >
                                        {/* the option below allows for a nullable subcat do not delete*/}
                                        <option>

                                        </option>
                                        {currentSubCategories.map(subCategory =>
                                            <option
                                            value={subCategory.id}
                                            key={subCategory.id}>{subCategory.name}</option>
                                            )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blockWrapper}>
                            <div className={styles.block}>
                                <div className={styles.blockLeft}>
                                    <h3>Project location</h3>
                                    <p>Enter the location that best describes where your project is based.</p>
                                </div>
                                <div className={styles.blockRight}>
                                    <select
                                        className={styles.formInput}
                                        value={countryId}
                                        onChange={(e) => setCountryId(e.target.value)}
                                        >
                                        {countries.map(country =>
                                            <option
                                            value={country.id}
                                            key={country.id}>{country.name}</option>
                                            )}
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div className={styles.blockWrapper}>
                            <div className={styles.block}>
                                <div className={styles.blockLeft}>
                                    <h3>Project image</h3>
                                    <p>Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.</p>
                                    <p>Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.</p>
                                    <p>Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Kickstarter homepage and newsletter features.</p>
                                </div>
                                <div className={styles.blockRight}>
                                    <input
                                        className={styles.formInput}
                                        value={imageUrl}
                                        type="text"
                                        placeholder={'enter your image url here'}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                        ></input>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blockWrapper}>
                            <div className={styles.block}>
                                <div className={styles.blockLeft}>
                                    <h3>Funding goal</h3>
                                    <p>Set an achievable goal that covers what you need to complete your project.</p>
                                    <p>Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p>
                                </div>
                                <div className={styles.blockRight}>
                                    <label>Goal amount</label>
                                    <input
                                        className={styles.formInput}
                                        value={goal}
                                        type="text"
                                        placeholder={'$50,000'}
                                        onChange={(e) => setGoal(e.target.value)}
                                        ></input>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blockWrapper}>
                            <div className={styles.block}>
                                <div className={styles.blockLeft}>
                                    <h3>Campaign duration</h3>
                                    <p>Set a time limit for your campaign. You won’t be able to change this after you launch.</p>
                                </div>
                                <div className={styles.blockRight}>
                                    <label>Enter number of days</label>
                                    <input
                                        className={styles.formInput}
                                        value={campaignDuration}
                                        type="text"
                                        placeholder={'30'}
                                        // onChange={(e) => setCampaignDuration(e.target.value)}
                                        onChange={handlingChangingCampaignDuration}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                            >{saveProjectButtonText}</button>
                        </div>
                    </form>
                    <div>
                        <button
                            onClick={() => handleDelete(projectId)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )
        } else if (currentSelectedTab === 'story') {
            return (
                <ProjectEditStory project={project} />
            )
        } else if (currentSelectedTab === 'rewards') {
            return (
                <ProjectEditRewards project={project}
                    rewards={rewardsForProject} />
            )
        } else if (currentSelectedTab === 'people') {
            return (
                <ProjectEditPeople project={project} />
            )
        } else if (currentSelectedTab === 'payment') {
            return (
                <ProjectEditPayment project={project} />
            )
        } else if (currentSelectedTab === 'promotion') {
            return (
                <ProjectEditPromotion project={project} />
            )
        }
    }
    return (
        <div className={styles.dashBoardContentAndMenu}>
            <div className={styles.wholeMenu}>
                <div className={styles.topMenu}>
                    <div className={styles.topLeft}>
                        <div className={styles.logoDiv}>
                            QUICKSTARTER
                        </div>
                        <div className={styles.backButtonDiv}>
                            <button><span><i className="fas fa-long-arrow-alt-left"></i></span> Category</button>
                        </div>
                    </div>
                    <div className={styles.topRight}>
                        <div className={styles.cancelButtonDiv}>
                            <button className={styles.cancelButton}>Cancel</button>
                        </div>
                        <div className={styles.saveButtonDiv}>
                            <button onClick={handleGoLiveButton} className={styles.saveButton}>Save</button>
                        </div>
                    </div>
                </div>
                <div>
                    {goLiveErrors && goLiveErrors.map(error => (
                        <div key={error}>
                            {error}
                        </div>
                    ))}
                </div>
                <div className={styles.tabMenu}>
                    <div onClick={(e) => setCurrentSelectedTab('basics')}>✍️ Basics</div>
                    <div onClick={(e) => setCurrentSelectedTab('rewards')}>🎁 Rewards</div>
                    <div onClick={(e) => setCurrentSelectedTab('story')}>📖 Story</div>
                    <div onClick={(e) => setCurrentSelectedTab('people')}>👥 People</div>
                    <div onClick={(e) => setCurrentSelectedTab('payment')}>💰 Payment</div>
                    <div onClick={(e) => setCurrentSelectedTab('promotion')}>📢 Promotion</div>
                </div>
            </div>
            {dashBoardContent()}
        </div>
    );
}
export default Project;
