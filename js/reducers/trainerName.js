const actions = require("../actions/index");

export const trainerName = (
  state = {
    user: "Personal Trainer"
  },
  action
) => {
  if (action.type === actions.TRAINER_NAME) {
    console.log("Action initiated to change Trainer name to: ", action.payload);
    return Object.assign({}, state, {
      user: action.payload
    });
  } else {
    return state;
  }
};
