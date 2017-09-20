import { createStore } from "redux";
import { appReducers } from "../reducers/index";

export default createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
