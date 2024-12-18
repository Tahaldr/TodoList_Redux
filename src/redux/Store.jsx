import { configureStore } from "@reduxjs/toolkit";
// Or use create legacy store as Iraqui used :
import todoReducer from "./Reducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
