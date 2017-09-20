import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import trainerStore from "./store/store";

import App from "./app";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Provider store={trainerStore}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
