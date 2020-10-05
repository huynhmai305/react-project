export type Todo = {
  id?: number,
  title?: string,
  completed?: boolean
}

export type TodoList = Todo[]

export const initTodoList: TodoList = [
  {
    id: 0,
    title: 'Todo 1',
    completed: true
  },
  {
    id: 1,
    title: 'Todo 2',
    completed: false
  }
]
