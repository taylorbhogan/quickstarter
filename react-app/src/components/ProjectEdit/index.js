import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editProject, deleteProject } from '../../store/project'


function Project() {
  const { projectId }  = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([])

  const [project, setProject] = useState('')
  const [blurb, setBlurb] = useState(project.blurb)
  const [category, setCategory] = useState(project.category)
  const [country, setCountry] = useState(project.country)
  const [subCategory, setSubCategory] = useState('')
  const [title, setTitle] = useState('')
  const [goal, setGoal] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [campaignDuration, setCampaignDuration] = useState('')

  // TODO: switch these to be their equivalents pulled from the db
  const categories = ['Art', 'Comics', 'Crafts']
  const subCategories = ['Stuff', 'Things']
  const countries = ['Norway', 'New Zealand', 'Mongolia']

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/projects/${projectId}`);
      const project = await response.json();
      setProject(project);
      setBlurb(project.blurb)
      setCategory(project.category)
    })();
  }, [projectId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    // TODO: frontend validations
    setErrors(errors)

    const newProject = {
      ...project,
      title,
      blurb,
      category,
      subCategory,
      country,
      imageUrl,
      campaignDuration
    }
    // TODO: implement the API route to handle the fetch request from editProject in the store in project.js
    let editedProject = await dispatch(editProject(newProject))
    console.log("editedProject------->", editedProject);
    if (editedProject) {
      history.push(`/projects/${editedProject.id}`);
    }
  }

  const handleDelete = async (projectId) => {
    const deletedProject = await dispatch(deleteProject(projectId))
    if (deletedProject) {
      history.push(`/discover`);
    }
  }

  return (
    <div>
      <div>
        <div>✍️ Basics</div>
        <div>📊 Funding</div>
        <div>🎁 Rewards</div>
        <div>📖 Story</div>
        <div>👥 People</div>
        <div>💰 Payment</div>
        <div>📢 Promotion</div>
      </div>
      <div>
        <div>
          <h1>Start with the basics</h1>
          <p>Make it easy for people to learn about your project.</p>
        </div>
        <form
          onSubmit={handleSubmit}
        >
          <div>
            <h2>Project title</h2>
            <div>Write a clear, brief title that helps people quickly understand the gist of your project.</div>
            <div>
              <label>Title</label>
              <input
                type="text"
                placeholder={'The Community Microscope Kit'}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              ></input>
            </div>
            <div>
              <label>Subtitle</label>
              <textarea
                placeholder={'Explore the invisible microscopic world around you with an affordable microscope kit you construct yourself.'}
                onChange={(e) => setBlurb(e.target.value)}
                value={blurb}
              ></textarea>
            </div>
          </div>
          <div>
            <h2>Project category</h2>
            <div>Choose the category that most closely aligns with your project.</div>
            <div>Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.</div>
            <div>You’ll be able to change the category and subcategory even after your project is live.</div>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {categories.map(category =>
                <option
                  value={category}
                  key={category}>{category}</option>
                )}
            </select>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              value={subCategory}
            >
              {subCategories.map(subCategory =>
                <option
                  value={subCategory}
                  key={subCategory}>{subCategory}</option>
                )}
            </select>
          </div>
          <div>
            <h2>Project location</h2>
            <p>Enter the location that best describes where your project is based.</p>
            <select
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            >
              {countries.map(country =>
                <option
                  value={country}
                  key={country}>{country}</option>
                )}
            </select>
          </div>
          <div>
            <h2>Project image</h2>
            <p>Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.</p>
            <p>Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.</p>
            <p>Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Kickstarter homepage and newsletter features.</p>
            <input
                type="text"
                placeholder={'enter your image url here'}
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
              ></input>
          </div>
          <div>
            <h2>Funding goal</h2>
            <p>Set an achievable goal that covers what you need to complete your project.</p>
            <p>Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p>
            <div>
              <label>Goal amount</label>
              <input
                type="text"
                placeholder={'$50,000'}
                onChange={(e) => setGoal(e.target.value)}
                value={goal}
              ></input>
            </div>
          </div>
          <div>
            <h2>Campaign duration</h2>
            <div>
              <label>Enter number of days</label>
              <input
                type="text"
                placeholder={'30'}
                onChange={(e) => setCampaignDuration(e.target.value)}
                value={campaignDuration}
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
            >Save</button>
          </div>
        </form>
        <div>
          <button
            onClick={() => handleDelete(projectId)}
          >
            Delete
          </button>
        </div>
        {/* the below is left over from earlier testing; it can be deleted whenever  */}
        <ul>
          <li>
            <strong>Project Id</strong> {projectId}
          </li>
          <li>
            <strong>Project Blurb</strong> {project.blurb}
          </li>
          <li>
            <strong>Project Category</strong> {project.category}
          </li>
          <li>
            <strong>Project Country</strong> {project.country}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Project;