import { TodoListState, initialTodoList, todoListReducer } from "./todoReducer";
import { UserState, initialUser, userReducer } from "./userReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";
import {
  ProductsState,
  initialProducts,
  productReducer,
} from "./productReducer";
import { initialQuiz, quizReducer, QuizState } from "./quizReducer";

export type RootState = {
  todoList: TodoListState;
  user: UserState;
  productList: ProductsState;
  quiz: QuizState;
};

export const initialState = {
  todoList: initialTodoList,
  user: initialUser,
  productList: initialProducts,
  quiz: initialQuiz,
};

export default {
  todoList: todoListReducer,
  user: userReducer,
  visibilityFilter: visibilityFilterReducer,
  productList: productReducer,
  quiz: quizReducer,
};
