import { TodoListState, initialTodoList, todoListReducer } from "./todoReducer";
import { UserState, initialUser, userReducer } from "./userReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";

export type RootState = {
  todoList: TodoListState;
  user: UserState;
  visibilityFilter: TodoListState;
};

export const initialState = {
  todoList: initialTodoList,
  user: initialUser,
};

export default {
  todoList: todoListReducer,
  user: userReducer,
  visibilityFilter: visibilityFilterReducer,
};
