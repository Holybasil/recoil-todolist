import React, { useState } from "react";
import {
  useResetRecoilState,
  useRecoilTransactionObserver_UNSTABLE,
  useGotoRecoilSnapshot,
} from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { setConfig } from "react-hot-loader";
import { todoListState, todoListSelector } from "./store";
import Home from "./Home";
import Todo from "./Todo";
import styles from "./Home/style.module.css";

setConfig({
  reloadHooks: false,
});

const App = () => {
  const [snapshots, setSnapshots] = useState([]);

  const resetTodoList = useResetRecoilState(todoListSelector);

  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    setSnapshots([...snapshots, snapshot]);
  });

  // when we change the state by `gotoSnapshot`, a new snapshot is produced in fact
  const gotoSnapshot = useGotoRecoilSnapshot();

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.resetButton}
        onClick={() => {
          resetTodoList();
        }}
      >
        reset TodoList
      </button>
      <div className={styles.backSnapshotButtonGroup}>
        {snapshots.map((snapshot, index) => (
          <button
            className={styles.resetButton}
            onClick={() => {
              gotoSnapshot(snapshot);
            }}
          >
            go back snapshot {index}
          </button>
        ))}
      </div>

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
