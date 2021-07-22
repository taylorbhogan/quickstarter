// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
// THIS IS THE TEST FILE
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editProject, deleteProject } from '../../store/project'
import { getCountries } from '../../store/country'
import { getCategories } from '../../store/category'
import { getSubCategories } from '../../store/subCategory'
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
    // const [subTitle, setSubTitle] = useState(project.subTitle)
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
    // const startingSubCat = subCategories.find(subCat => subCat.category_id === +categoryId)
    const [currentSubCategories, setCurrentSubCategories] = useState([subCategories.filter(subCat => subCat.id === +categoryId)])
    // if (subCategories.length) {
    //   let startingSubCats = subCategories.filter(subCat => subCat.category_id === +categoryId)
    //   console.log(startingSubCats)
    // }
    // if (startingSubCats.length) {

    //   setCurrentSubCategories(startingSubCats)
    // }
    // TODO: switch these to be their equivalents pulled from the db
    // const categories = ['Art', 'Comics', 'Crafts']
    // const subCategories = ['Stuff', 'Things']
    // const countries = ['Norway', 'New Zealand', 'Mongolia']

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/projects/${projectId}`);
            const project = await response.json();
            // console.log(project)
            await setProject(project);
            await dispatch(getCountries())
            await dispatch(getCategories())
            await dispatch(getSubCategories())
            await setTitle(project.title)
            await setGoal(project.funding_goal)
            await setImageUrl(project.project_image_url)
            await setCampaignDuration(project.campaign_duration)
            await setSubTitle(project.sub_title)
            await setCountryId(project.country_id)
            await setSubCategory(project.sub_category_id)
            if (categoryId != project.category_id) {
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
                console.log("INITIAL SUBCAT!!!", initialSubCatValue)
            }
            console.log("INITIAL SUBCAT!!!", initialSubCatValue)
        }
        // setSubCategory(initialSubCatValue.name)
        // }
        // console.log("SUBCAT", subCatArray)

    }, [categoryId])
    // HANDLE SUBMIT IS NOT YET FUNCTIONAL - IN THE WORKS
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
            campaign_duration: +campaignDuration,
            funding_goal: +goal,

            // category: categoryId,
            // country: countryId,
        }
        // console.log('THIS IS THE THING YOU"RE SENDING BACK **************', subCategory)
        console.log('THIS IS THE THING YOU"RE SENDING BACK **************', newProject)
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
        history.push(`/projects/${projectId}`);
        }
    }

    const handleDelete = async (projectId) => {
        const deletedProject = await dispatch(deleteProject(projectId))
        if (deletedProject) {
            history.push(`/discover`);
        }
    }


    const dashBoardContent = () => {
        if (currentSelectedTab === 'basics') {
            return (
                <div>

                    <div>
                        <h1>Start with the basics</h1>
                        <p>Make it easy for people to learn about your project.</p>
                    </div>
                    <form
                        onSubmit={handleSubmit}>
                        <div className={styles.block}>
                        <h2>Project title</h2>
                        <div>Write a clear, brief title that helps people quickly understand the gist of your project.</div>
                        {errors && errors.map((error, ind) => (
                            <div style={{color: "red"}} key={ind}>{error}</div>
                          ))}
                            <div>
                                <label>Title</label>
                                <input
                                    value={title}
                                    type="text"
                                    placeholder={'The Community Microscope Kit'}
                                    onChange={(e) => setTitle(e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label>Subtitle</label>
                                <textarea
                                    value={subTitle}
                                    placeholder={'Explore the invisible microscopic world around you with an affordable microscope kit you construct yourself.'}
                                    onChange={(e) => setSubTitle(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <h2>Project category</h2>
                            <div>Choose the category that most closely aligns with your project.</div>
                            <div>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.</div>
                            <div>You’ll be able to change the category and subcategory even after your project is live.</div>
                            <select
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
                        <div className={styles.block}>
                            <h2>Project location</h2>
                            <p>Enter the location that best describes where your project is based.</p>
                            <select
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
                        <div className={styles.block}>
                            <h2>Project image</h2>
                            <p>Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.</p>
                            <p>Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.</p>
                            <p>Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Kickstarter homepage and newsletter features.</p>
                            <input
                                value={imageUrl}
                                type="text"
                                placeholder={'enter your image url here'}
                                onChange={(e) => setImageUrl(e.target.value)}
                            ></input>
                        </div>
                        <div className={styles.block}>
                            <h2>Funding goal</h2>
                            <p>Set an achievable goal that covers what you need to complete your project.</p>
                            <p>Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p>
                            <div>
                                <label>Goal amount</label>
                                <input
                                    value={goal}
                                    type="text"
                                    placeholder={'$50,000'}
                                    onChange={(e) => setGoal(e.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <h2>Campaign duration</h2>
                            <div>
                                <label>Enter number of days</label>
                                <input
                                    value={campaignDuration}
                                    type="text"
                                    placeholder={'30'}
                                    onChange={(e) => setCampaignDuration(e.target.value)}
                                ></input>
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
                <ProjectEditRewards project={project} />
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
        <div>
            <div className={styles.tabMenu}>
                <div onClick={(e) => setCurrentSelectedTab('basics')}>✍️ Basics</div>
                <div onClick={(e) => setCurrentSelectedTab('rewards')}>🎁 Rewards</div>
                <div onClick={(e) => setCurrentSelectedTab('story')}>📖 Story</div>
                <div onClick={(e) => setCurrentSelectedTab('people')}>👥 People</div>
                <div onClick={(e) => setCurrentSelectedTab('payment')}>💰 Payment</div>
                <div onClick={(e) => setCurrentSelectedTab('promotion')}>📢 Promotion</div>
            </div>
            {dashBoardContent()}
        </div>
    );
}
export default Project;
