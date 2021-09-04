/* ------ DEFINE ACTION TYPES AS CONSTANTS ------ */


/* ------ DEFINE ACTION CREATORS ------ */


/* ------ DEFINE INITIAL STATE ------ */


/* ------ DEFINE THUNK ACTION CREATORS ------ */

export const createBacking = (backing) => async (dispatch) => {
  // console.log('I AM THE STORE HERE IS YOUR BACKING', backing);
  const response = await fetch('/api/backings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      backing
    }),
  });

  if (response.ok) {
    const data = await response.json();
    // const newProject = data.newProject

    // dispatch(addProjectToStore(newProject))
    return data;
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
