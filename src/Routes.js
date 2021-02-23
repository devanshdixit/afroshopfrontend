import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./screens/main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
