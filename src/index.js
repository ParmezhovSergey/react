import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SamuraiJSApp from "./App";

ReactDOM.render(
  <SamuraiJSApp />,

  document.getElementById("root")
);

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

reportWebVitals();
