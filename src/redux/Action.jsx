export const add_todo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const toggle_todo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});

export const remove_todo = (id) => ({
  type: "REMOVE_TODO",
  payload: id,
});
