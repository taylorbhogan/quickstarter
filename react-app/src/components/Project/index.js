import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getProjects } from "../../store/project";
import ProjectTopView from "./ProjectTopView";
import ProjectStickyMenu from "./ProjectStickyMenu";
import ProjectMainContentCenter from "./ProjectMainContentCenter";
import ProjectBottomContent from "./ProjectBottomContent";
import ProjectMainContentLeft from "./ProjectMainContentLeft";
import ProjectMainContentRight from "./ProjectMainContentRight";
import styles from "./Project.module.css";

function Project({ everyProject }) {
  const [project, setProject] = useState({});
  const [amount, setAmount] = useState(0);
  const [numberOfBackers, setNumberOfBackers] = useState(0);
  const [categories, setCategories] = useState([]);
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  if (!everyProject[projectId]) {
    history.push("/");
  }
  useEffect(() => {
    (async () => {
      const backingResponse = await fetch(`/api/backings/${projectId}`);
      const backingData = await backingResponse.json();
      setNumberOfBackers(backingData.numberOfBackers);

      const categoryResponse = await fetch(`/api/categories`);
      const categoryData = await categoryResponse.json();
      setCategories(categoryData.categories);
    })();
  }, [projectId]);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  useEffect(() => {
    if (!projectId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/projects/${projectId}`);
      const project = await response.json();
      // console.log("*****", !project.is_live)
      // if (!project.is_live && project.user_id != user.id) return history.push('/')
      // if (!project.is_live && project.user_id === user.id) return history.push(`/projects/${projectId}/edit`)

      setProject(project);
    })();
  }, [projectId, amount]);

  if (!project) {
    return null;
  }

  const addABacking = async (e) => {
    e.preventDefault();

    if (amount <= 0) {
      setAmount(0);
    } else {
      // const backing = {
      //   amount: +amount,
      //   user_id: user.id,
      //   project_id: +projectId,
      //   // DEFAULT BACKING DOES NOT GET AN ID; WE USE THE ID FROM REAL REWARDS TO ADD THEM TO THE DB
      //   reward_id: e.target.id === "" ? null : +e.target.id,
      // };

      // const data = await dispatch(createBacking(backing));
      // const createdBacking = data.newBacking;
      setAmount(0);
      // console.log('1234----responseFromStore-------->', createdBacking);
      // if (createdBacking){
      //   do stuff
      // }
    }
  };

  return (
    <div>
      <ProjectTopView
        project={project}
        numberOfBackers={numberOfBackers}
        categories={categories}
      />
      <ProjectStickyMenu user={user} project={project} />
      <div className={styles.projectMainContent}>
        <ProjectMainContentLeft project={project} />
        <ProjectMainContentCenter project={project} />
        <ProjectMainContentRight
          addABacking={addABacking}
          amount={amount}
          setAmount={setAmount}
          project={project}
          user={user}
          projectId={projectId}
        />
      </div>
      <ProjectBottomContent />
    </div>
  );
}
export default Project;
