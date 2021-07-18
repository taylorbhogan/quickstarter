import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Project() {
  const [project, setProject] = useState({});
  const [blurb, setBlurb] = useState('')
  const [title, setTitle] = useState('')

  const { projectId }  = useParams();

  useEffect(() => {
    if (!projectId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/projects/${projectId}`);
      const project = await response.json();
      setProject(project);
    })();
  }, [projectId]);

  if (!project) {
    return null;
  }

  return (
    <div>
      <div>
        <div>Basics</div>
        <div>Funding</div>
        <div>Rewards</div>
        <div>Story</div>
        <div>People</div>
        <div>Payment</div>
        <div>Promotion</div>
      </div>
      <div>
        <h1>Start with the basics</h1>
        <p>Make it easy for people to learn about your project.</p>
      </div>
      <form>
        <div>
          <div>Project title</div>
          <div>Write a clear, brief title that helps people quickly understand the gist of your project.</div>
          <div>
            <label>Title</label>
            <input
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
      </form>
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
  );
}
export default Project;
