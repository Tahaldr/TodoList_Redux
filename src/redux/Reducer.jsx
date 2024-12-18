import { produce } from "immer";

const initialState = {
  todos: [], 
};

const todoReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_TODO": {
        draft.todos.push({
          id: action.payload.id,
          lib: action.payload.lib,
          completed: false,
        });
        break;
      }
      case "TOGGLE_TODO": {
        const todo = draft.todos.find((t) => t.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
        break;
      }
      case "REMOVE_TODO": {
        draft.todos = draft.todos.filter((t) => t.id !== action.payload);
        break;
      }

      default:
        break;
    }
  });
};

export default todoReducer;
