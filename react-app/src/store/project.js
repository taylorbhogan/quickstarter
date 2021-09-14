/* ------ DEFINE ACTION TYPES AS CONSTANTS ------ */

const ADD_PROJECT = "session/ADD_PROJECT";
const SET_PROJECTS = "session/SET_PROJECTS";
const REMOVE_ONE = "session/REMOVE_ONE";

/* ------ DEFINE ACTION CREATORS ------ */

const addProjectToStore = (project) => ({
  type: ADD_PROJECT,
  project,
});

const setAllProjectsInStore = (projects) => ({
  type: SET_PROJECTS,
  projects,
});

const deleteProjectFromStore = (projectId) => ({
  type: REMOVE_ONE,
  projectId,
});

/* ------ DEFINE INITIAL STATE ------ */

const initialState = {};

/* ------ DEFINE THUNK ACTION CREATORS ------ */

export const getProjects = () => async (dispatch) => {
  const response = await fetch("/api/projects");
  if (response.ok) {
    const data = await response.json();
    const projectsArray = data.projects;
    dispatch(setAllProjectsInStore(projectsArray));
  }
};

export const createProject = (project) => async (dispatch) => {
  const response = await fetch("/api/projects/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      project,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    const newProject = data.newProject;

    dispatch(addProjectToStore(newProject));
    return newProject;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};
//TODO: build the API route to handle this fetch request
export const editProject = (newProject) => async (dispatch) => {
  // console.log(newProject);
  const response = await fetch(`/api/projects/${newProject.id}/edit`, {
    method: "PATCH",
    body: JSON.stringify(newProject),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const newProjectData = await response.json();
    console.log(newProjectData);
    dispatch(addProjectToStore(newProjectData));
    // return newProjectData
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const deleteProject = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const projectDeleteSuccessMessage = await response.json();
    dispatch(deleteProjectFromStore(projectId));

    return projectDeleteSuccessMessage;
  }
  return null;
};

/* ------ DEFINE & EXPORT REDUCER ------ */

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_PROJECT:
      newState = {};
      newState[action.project.id] = action.project;
      return {
        ...state,
        ...newState,
      };
    case SET_PROJECTS:
      newState = {};
      action.projects.forEach((project) => {
        newState[project.id] = project;
      });
      return {
        ...state,
        ...newState,
      };
    case REMOVE_ONE:
      newState = Object.assign({}, state);
      delete newState[action.projectId];
      return {
        ...newState,
      };
    default:
      return state;
  }
}
