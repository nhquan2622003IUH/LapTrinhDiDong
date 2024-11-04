//atom
import { atom, selector } from "recoil";
import * as apiTodo from "./api";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});
