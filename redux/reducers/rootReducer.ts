import { TodoListState, initialTodoList, todoListReducer} from './todoReducer'
export type RootState = {
  todoList: TodoListState
}

export const initialState = {
  todoList: initialTodoList
}

export default {
  todoList: todoListReducer
}
