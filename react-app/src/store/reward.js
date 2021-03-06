const SET_REWARDS = "rewards/SET_REWARDS";
const REMOVE_ONE_REWARD = "rewards/REMOVE_ONE_REWARD";
const ADD_REWARD = "rewards/ADD_REWARD";

const setSingleProjectRewardsInStore = (rewards) => ({
  type: SET_REWARDS,
  rewards,
});

const deleteRewardFromStore = (rewardId) => ({
  type: REMOVE_ONE_REWARD,
  rewardId,
});

const addRewardToStore = (reward) => ({
  type: ADD_REWARD,
  reward,
});

const initialState = {};

export const getProjectRewards = (project) => async (dispatch) => {
  // console.log("********you made it here******", project)
  const response = await fetch(`/api/projects/${project.id}/rewards`);

  if (response.ok) {
    const data = await response.json();
    // console.log("******this is data*******", data)
    const rewardsArray = data.rewards;
    dispatch(setSingleProjectRewardsInStore(rewardsArray));
  }
};

export const createProjectReward = (project, newReward) => async (dispatch) => {
  // console.log(project, newReward, "****")
  const response = await fetch(`/api/projects/${project.id}/rewards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newReward,
    }),
  });

  const data = await response.json();
  if (data.description) {
    dispatch(addRewardToStore(data));
  }

  return data;

  //   const newProjectReward = data.newProject

  //   dispatch(addProjectToStore(newProject))
  //   return newProject;
  // } else if (response.status < 500) {
  //   const data = await response.json();
  //   if (data.errors) {
  //     return data.errors;
  //   }
  // } else {
  //   return ['An error occurred. Please try again.']
  // }
};

export const deleteProjectReward = (rewardId) => async (dispatch) => {
  const response = await fetch(`/api/rewards/${rewardId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    // const data = await response.json();
    dispatch(deleteRewardFromStore(rewardId));
  }
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_REWARDS:
      newState = {};
      action.rewards.forEach((reward) => {
        newState[reward.id] = reward;
      });
      return {
        ...state,
        ...newState,
      };
    case REMOVE_ONE_REWARD:
      newState = Object.assign({}, state);
      delete newState[action.rewardId];
      return {
        ...newState,
      };
    case ADD_REWARD:
      newState = {};
      console.log("HERE IS YOUR ACTION.REWARD.ID", action.reward.id);
      newState[action.reward.id] = action.reward;
      console.log(newState[action.reward.id]);
      console.log(newState);
      console.log(state);
      return {
        ...state,
        ...newState,
      };
    default:
      return state;
  }
}
