import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory('todos')

export const addTodo = actionCreator<{title: String}>('ADD_TODO')
export const toggleTodo = actionCreator<{id: Number}>('TOGGLE_TODO')
export const deleteTodo = actionCreator<{id: Number}>('DELETE_TODO')
export const updateTodo = actionCreator<{id: Number, newTitle: String}>('UPDATE_TODO')
export const getAllTodos = actionCreator('ALL')
export const getActiveList = actionCreator('ACTIVE')
export const getCompletedList = actionCreator('COMPLETED')
