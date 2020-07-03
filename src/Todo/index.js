import React, { useState } from "react";
import styles from "../Home/style.module.css";

import {
  useRecoilState,
  useRecoilValue,
  // getAtomWithKey,
} from "recoil";
import { Link } from "react-router-dom";

import { todoListState, todoListTypeState, todoListSelector } from "../store";

const Todo = () => {
  const [todoType, setTodoType] = useRecoilState(todoListTypeState);
  const [todoContent, setTodoContent] = useState("");
  const todoList = useRecoilValue(todoListState);
  const [typedTodoList, setTodoList] = useRecoilState(todoListSelector);

  const updateTodoList = () => {
    setTodoList([
      ...todoList,
      {
        type: todoType,
        content: todoContent,
      },
    ]);
    setTodoContent("");
  };
  const onDeleteTodoList = (index) => {
    const nextTodoList = [...todoList];
    nextTodoList.splice(index, 1);
    setTodoList(nextTodoList);
  };
  return (
    <div className={styles.page}>
      <div className={styles.typeSelect}>
        <div className={styles.typeOption}>
          <input
            type="radio"
            name="todoType"
            value="snack"
            id="snack"
            checked={todoType === "snack"}
            onChange={(e) => setTodoType(e.target.value)}
          ></input>
          <label htmlFor="snack">零食</label>
        </div>
        <div className={styles.typeOption}>
          <input
            type="radio"
            name="todoType"
            value="drink"
            id="drink"
            checked={todoType === "drink"}
            onChange={(e) => setTodoType(e.target.value)}
          ></input>
          <label htmlFor="drink">饮料</label>
        </div>
      </div>

      <div className={styles.addTodo}>
        <input
          className={styles.addTodoInput}
          value={todoContent}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateTodoList();
            }
          }}
          onChange={(e) => setTodoContent(e.target.value)}
        ></input>
        <button
          className={styles.addTodoButton}
          onClick={() => {
            setTodoList([
              ...todoList,
              {
                type: todoType,
                content: todoContent,
              },
            ]);
          }}
        >
          +
        </button>
      </div>

      <ul className={styles.todoList}>
        {typedTodoList.map(({ content }) => (
          <li key={content} className={styles.todoListItem}>
            {content}
            <span
              className={styles.todoListItemDeleteIcon}
              onClick={() => onDeleteTodoList(content)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <Link to="/" className={styles.link}>
        &lt;-HOME
      </Link>
    </div>
  );
};

export default Todo;
