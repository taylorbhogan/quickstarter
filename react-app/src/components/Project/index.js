import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Project() {
  const [project, setProject] = useState({});
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
    <ul>
      <li>
        <strong>Project Id</strong> {projectId}
      </li>
      <li>
        <strong>Project SubTitle</strong> {project.subTitle}
      </li>
      <li>
        <strong>Project Category</strong> {project.category}
      </li>
      <li>
        <strong>Project Country</strong> {project.country}
      </li>
    </ul>
  );
}
export default Project;
