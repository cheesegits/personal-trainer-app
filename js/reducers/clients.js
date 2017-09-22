const actions = require("../actions/index");

export const clientNames = (
  state = {
    names: ["Mock Client", "Mock Client 2"]
  },
  action
) => {
  if (action.type === actions.CLIENT_NAME) {
    return Object.assign({}, state, {
      names: [...state.clientNames, action.payload]
    });
  } else {
    return state;
  }
};
