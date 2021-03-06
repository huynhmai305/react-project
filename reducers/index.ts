import { TodoListState, initialTodoList, todoListReducer } from "./todoReducer";
import { UserState, initialUser, userReducer } from "./userReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";
import {
  ProductsState,
  initialProducts,
  productReducer,
} from "./productReducer";
import { initialQuiz, quizReducer, QuizState } from "./quizReducer";
import {
  categoriesReducer,
  CategoriesState,
  initialCategories,
} from "./categoryReducer";
import { cartReducer, CartState, initialCart } from "./cartReducer";

export type RootState = {
  todoList: TodoListState;
  user: UserState;
  productList: ProductsState;
  quiz: QuizState;
  categories: CategoriesState;
  cart: CartState;
};

export const initialState = {
  todoList: initialTodoList,
  user: initialUser,
  productList: initialProducts,
  quiz: initialQuiz,
  categories: initialCategories,
  cart: initialCart,
};

export default {
  todoList: todoListReducer,
  user: userReducer,
  visibilityFilter: visibilityFilterReducer,
  productList: productReducer,
  quiz: quizReducer,
  categories: categoriesReducer,
  cart: cartReducer,
};
