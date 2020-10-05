export const addTodo = newTodo => ({ type: 'ADD_TODO', newTodo })
export const toggleTodo = (todo) =>({ type: 'TOGGLE_TODO', todo })
export const deleteTodo = (todo) =>({ type: 'DELETE_TODO', todo })
export const updateTodo = (todo, newTitle) =>({ type: 'UPDATE_TODO', todo, newTitle })
