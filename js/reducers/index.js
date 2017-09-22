import { combineReducers } from "redux";

import { trainerName } from "../reducers/trainerName";
import { clientNames } from "../reducers/clients";

export const appReducers = combineReducers({
  trainerName,
  clientNames
});
