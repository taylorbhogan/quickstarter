/* ------ DEFINE ACTION TYPES AS CONSTANTS ------ */

// const SET_USER = 'session/SET_USER';


/* ------ DEFINE ACTION CREATORS ------ */

// const setUser = (user) => ({
//   type: SET_USER,
//   payload: user
// });

// const removeUser = () => ({
//   type: REMOVE_USER,
// })

/* ------ DEFINE INITIAL STATE ------ */

// const initialState = { user: null };


/* ------ DEFINE THUNK ACTION CREATORS ------ */

// export const authenticate = () => async (dispatch) => {
//   const response = await fetch('/api/auth/', {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   if (response.ok) {
//     const data = await response.json();
//     if (data.errors) {
//       return;
//     }

//     dispatch(setUser(data));
//   }
// }

// export const login = (email, password) => async (dispatch) => {
//   const response = await fetch('/api/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email,
//       password
//     })
//   });


//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setUser(data))
//     return null;
//   } else if (response.status < 500) {
//     const data = await response.json();
//     if (data.errors) {
//       return data.errors;
//     }
//   } else {
//     return ['An error occurred. Please try again.']
//   }

// }

// export const logout = () => async (dispatch) => {
//   const response = await fetch('/api/auth/logout', {
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });

//   if (response.ok) {
//     dispatch(removeUser());
//   }
// };


export const createProject = (project) => async (dispatch) => {
  console.log('[[store/project: createProject]] --> api/projects');
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
    console.log('Response OK. console.logging in the Project Store');
  //   const data = await response.json();
  //   dispatch(setUser(data))
  //   return null;
  // } else if (response.status < 500) {
  //   const data = await response.json();
  //   if (data.errors) {
  //     return data.errors;
  //   }
  } else {
    return ['An error occurred. Please try again.']
  }
}


/* ------ DEFINE & EXPORT REDUCER ------ */

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_USER:
//       return { user: action.payload }
//     case REMOVE_USER:
//       return { user: null }
//     default:
//       return state;
//   }
// }
