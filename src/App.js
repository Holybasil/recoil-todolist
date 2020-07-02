import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { setConfig } from "react-hot-loader";
import Home from "./Home";
import Todo from "./Todo";

setConfig({
  reloadHooks: false,
});

const App = () => {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Router>
          <Switch>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  );
};

export default hot(App);
