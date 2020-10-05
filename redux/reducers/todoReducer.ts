import {initTodoList, TodoList} from "../models/todoModel";

export type TodoListState = TodoList

export const initialTodoList: TodoListState = [...initTodoList]

export const todoListReducer = (
  state: TodoListState = initialTodoList,
  action,
) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state = [
        ...state,
        {
          id: state.length++,
          title: action.newTodo,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state = state.map(todo => todo === action.todo ? {...todo, completed: !todo.completed} : todo)
    case 'UPDATE_TODO':
      return state = state.map(todo => todo === action.todo ? {...todo, title: action.newTodo} : todo)
    case 'DELETE_TODO':
      return state = state.filter(todo => {return todo !== action.todo})
    default:
      return state
  }
};
