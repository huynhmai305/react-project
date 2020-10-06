import { TodoListState, initialTodoList, todoListReducer} from './todoReducer'
import {UserState, initialUser, userReducer} from './userReducer'

export type RootState = {
  todoList: TodoListState,
  user: UserState
}

export const initialState = {
  todoList: initialTodoList,
  user: initialUser
}

export default {
  todoList: todoListReducer,
  user: userReducer
}
