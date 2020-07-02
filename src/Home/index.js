import React from "react";
import {
  useRecoilValue,
  // getAtomWithKey,
} from "recoil";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { todoListState } from "../store";

const Home = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <div className={styles.home}>
      <header className={styles["home-header"]}>
        <p>今日TodoList.</p>
        <ul className={styles.todoList}>
          {todoList.map((item, index) => (
            <li key={index} className={styles.todoListItem}>
              {item.content}
              <span className={styles.todoListItemTag}>{item.type}</span>
            </li>
          ))}
        </ul>
        <Link to="/todo" className={styles.link}>
          -&gt;TODO
        </Link>
      </header>
    </div>
  );
};

export default Home;
