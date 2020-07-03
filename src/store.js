import { atom, selector } from "recoil";

export const todoListTypeState = atom({
  key: "todoListTypeState",
  default: "snack",
})

export const todoListTypeListState = atom({
  key: "todoListTypeListState",
  default: ["snack", "drink"],
});

export const todoListState = atom({
  key: "todoListState",
  default: [
    { type: "snack", content: "🎂 cake" },
    { type: "drink", content: "🍶 water" },
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
