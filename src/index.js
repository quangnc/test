import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./utils/history";
import "antd/dist/antd.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
