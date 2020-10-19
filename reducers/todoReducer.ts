import { Action } from "redux";
import { isType } from "typescript-fsa";
import * as actions from "../actions/todoAction";
import { initTodoList, TodoList } from "../models/todoModel";

export type TodoListState = TodoList;

export const initialTodoList: TodoListState = initTodoList;

export const todoListReducer = (
  state: TodoListState = initialTodoList,
  action: Action
) => {
  if (isType(action, actions.addTodo)) {
    return [
      ...state,
      {
        id: state.length++,
        title: action.payload.title,
        completed: false,
      },
    ];
  }
  if (isType(action, actions.updateTodo)) {
    return state.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, title: action.payload.newTitle }
        : todo
    );
  }
  if (isType(action, actions.deleteTodo)) {
    return state.filter((todo) => todo.id !== action.payload.id);
  }
  if (isType(action, actions.toggleTodo)) {
    return state.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
  }
  return state;
};
