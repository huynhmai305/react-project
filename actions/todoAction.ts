import actionCreatorFactory from "typescript-fsa";
import { TodoList } from "../models/todoModel";

const actionCreator = actionCreatorFactory("todos");

export const setListTodo = actionCreator<TodoList>("SET_LIST_TODO");
export const addTodo = actionCreator<{ title: String }>("ADD_TODO");
export const toggleTodo = actionCreator<{ id: Number }>("TOGGLE_TODO");
export const deleteTodo = actionCreator<{ id: Number }>("DELETE_TODO");
export const updateTodo = actionCreator<{ id: Number; newTitle: String }>(
  "UPDATE_TODO"
);
export const setVisibilityFilter = actionCreator<{ filter }>(
  "SET_VISIBILITY_FILTER"
);
export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED",
};
