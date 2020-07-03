import React from "react";
import { useResetRecoilState } from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { setConfig } from "react-hot-loader";
import { todoListSelector } from "./store";
import Home from "./Home";
import Todo from "./Todo";
import styles from "./Home/style.module.css";

setConfig({
  reloadHooks: false,
});

const App = () => {
  const resetTodoList = useResetRecoilState(todoListSelector);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.resetButton}
        onClick={() => {
          resetTodoList();
        }}
      >
        重置TodoList
      </button>
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
    </div>
  );
};

export default hot(App);
