import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import WatchTower from "./containers/WatchTowerPage";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/watch-tower" component={WatchTower} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
