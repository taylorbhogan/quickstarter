const SET_PROJECTS = "search/SET_PROJECTS";

const setProjects = (projects) => ({
  type: SET_PROJECTS,
  projects,
});

const initialState = {};

export const getProjectsByKeyword = (searchQuery) => async (dispatch) => {
  const response = await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ searchQuery }),
  });

  if (response.ok) {
    const { filtered_projects } = await response.json();
    dispatch(setProjects(filtered_projects));
    return null;
  } else if (response.status < 500) {
    const { errors } = await response.json();
    if (errors) {
      return errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_PROJECTS:
      newState = {};
      action.projects.forEach((project) => {
        newState[project.id] = project;
      });
      return {
        ...newState,
      };

    default:
      return state;
  }
}
