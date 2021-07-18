/* ------ DEFINE ACTION TYPES AS CONSTANTS ------ */

const ADD_PROJECT = 'session/ADD_PROJECT';
const SET_PROJECTS = 'session/SET_PROJECTS';


/* ------ DEFINE ACTION CREATORS ------ */

const setProject = (project) => ({
  type: ADD_PROJECT,
  project
});

const setAllProjectsInStore = (projects) => ({
  type: SET_PROJECTS,
  projects
});

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
    console.log('WE BACK BABY');
    console.log('data', data);

    const projectsArray = data.projects
    dispatch(setAllProjectsInStore(projectsArray))




    // console.log('Response OK. console.logging in the Project Store');
    // const data = await response.json();
    // let projectIJustCreated;

    // projectIJustCreated = data.projects[data.projects.length-1]
    // console.log('projectIJustCreated ------>',projectIJustCreated);
    // dispatch(setProject(data))

    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


/* ------ DEFINE & EXPORT REDUCER ------ */

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_PROJECT:
      newState = {}
      newState.project = action.project
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
    default:
      return state;
  }
}
