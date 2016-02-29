let nextTodoId = 0;

export const newTodo = (text) => {
  return {
    type: 'NEW_TODO',
    payload: {
      id: nextTodoId++,
      text: text,
      completed: false
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: {id}
  }
}
