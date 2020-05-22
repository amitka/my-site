import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { AppContextProvider } from "./hooks/useAppContext";
import { BrowserRouter as Router } from "react-router-dom";

import "./style/reset.scss";
import "./index.scss";

ReactDOM.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>,
  document.getElementById("root")
);
