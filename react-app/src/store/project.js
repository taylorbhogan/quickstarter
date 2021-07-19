/* ------ DEFINE ACTION TYPES AS CONSTANTS ------ */

const ADD_PROJECT = 'session/ADD_PROJECT';
const SET_PROJECTS = 'session/SET_PROJECTS';
const REMOVE_ONE = 'session/REMOVE_ONE';


/* ------ DEFINE ACTION CREATORS ------ */

const addProjectToStore = (project) => ({
  type: ADD_PROJECT,
  project
});

const setAllProjectsInStore = (projects) => ({
  type: SET_PROJECTS,
  projects
});

const deleteProjectFromStore = (projectId) => ({
  type: REMOVE_ONE,
  projectId
})



/* ------ DEFINE INITIAL STATE ------ */

const initialState = { };

/* ------ DEFINE THUNK ACTION CREATORS ------ */

export const getProjects = () => async (dispatch) => {
  const response = await fetch('/api/projects')
  if (response.ok) {
    const data = await response.json();
    const projectsArray = data.projects
    dispatch(setAllProjectsInStore(projectsArray))
  }
}


export const createProject = (project) => async (dispatch) => {
  // console.log('[[store/project: createProject]] --> api/projects');
  const response = await fetch('/api/projects/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      project
    }),
  });

  if (response.ok) {
    const data = await response.json();
    const newProject = data.newProject

    dispatch(addProjectToStore(newProject))
    return newProject;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const editProject = (newProject) => async dispatch  => {
  const response = await fetch(`/api/projects/${newProject.id}`, {
    method: 'PUT',
    body: JSON.stringify(newProject)
  });
  if (response.ok) {
    const newProjectData = await response.json();

    dispatch(addProjectToStore(newProjectData))
    return newProjectData
  }
}

export const deleteProject = (projectId) => async dispatch  => {
  const response = await fetch(`/api/projects/${projectId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    const spotDeleteSuccessMessage = await response.json();
    dispatch(deleteProjectFromStore(projectId))

    return spotDeleteSuccessMessage
  }
  return null;
}

/* ------ DEFINE & EXPORT REDUCER ------ */

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_PROJECT:
      newState = {}
      newState[action.project.id] = action.project
      return {
        ...state,
        ...newState
      };
    case SET_PROJECTS:
      newState = {}
      action.projects.forEach((project) => {
        newState[project.id] = project
      })
      return {
        ...state,
        ...newState
      };
    case REMOVE_ONE:
      newState = Object.assign({}, state)
      delete newState[action.spotId]
      return {
        ...newState
      }
    default:
      return state;
  }
}
