import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory("todos");

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
