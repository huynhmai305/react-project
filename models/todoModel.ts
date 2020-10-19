export type TodoList = {
  id?: number;
  title?: string;
  completed?: boolean;
}[];

export const initTodoList: TodoList = [];
