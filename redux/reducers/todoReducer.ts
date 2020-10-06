import {Action} from 'redux';
import {isType} from 'typescript-fsa';
import * as actions from "../actions/todoAction";
import {initTodoList, TodoList} from "../models/todoModel";

export type TodoListState = TodoList

export const initialTodoList: TodoListState = initTodoList

export const todoListReducer = (
  state: TodoListState = initialTodoList,
  action: Action,
) => {
  if (isType(action, actions.addTodo)) {
    return [
      ...state,
      {
        id: state.length++,
        title: action.payload.title,
        completed: false
      }
    ]
  }
  if (isType(action, actions.updateTodo)) {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return {...todo, title: action.payload.newTitle}
      }
    })
  }
  if (isType(action, actions.deleteTodo)) {
    const index: any = action.payload.id
    state.splice(index, 1)
    return state
  }
  if (isType(action, actions.getAllTodos)) {
    return state
  }
  if (isType(action, actions.getActiveList)) {
    return state.filter(todo => {
      return todo.completed === false
    })
  }
  if (isType(action, actions.getCompletedList)) {
    return state.filter(todo => {
      return todo.completed === true
    })
  }
  if (isType(action, actions.toggleTodo)) {
    return state.map(todo => {
      if (todo.id === action.payload.id) {
        return {...todo, completed: !todo.completed}
      }
    })
  }
  return state
};
