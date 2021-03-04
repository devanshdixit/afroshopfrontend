import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./screens/main";
import ProductPage from "./screens/productpage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path={process.env.PUBLIC_URL+'/productpage'} exact component={ProductPage} />
      </Switch>
    </BrowserRouter>
    
  );
};

export default Routes;
