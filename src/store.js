import { atom, selector } from "recoil";

export const todoListTypeState = atom({
  key: "todoListTypeState",
  default: "snack",
});

export const todoListState = atom({
  key: "todoListState",
  default: [
    { type: "snack", content: "趣多多" },
    { type: "drink", content: "肥宅快乐水" },
  ],
});

export const todoListSelector = selector({
  key: "todoListSelector",
  get: ({ get }) => {
    const type = get(todoListTypeState);
    const todoList = get(todoListState);
    return todoList.filter((item) => item.type === type);
  },
  set: ({ set }, newValue) => {
    set(todoListState, newValue);
  },
});
