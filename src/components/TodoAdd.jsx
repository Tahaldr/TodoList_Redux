import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../redux/Action";

const TodoAdd = () => {
  const [todo, setTodo] = useState({ id: 0, lib: "", done: false });
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todos.todos);

  let id = Math.floor(Math.random() * 100) + 1;

  // Ensure id is unique
  while (list.find((todo) => todo.id === id)) {
    id = Math.floor(Math.random() * 100) + 1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.lib) {
      dispatch(add_todo({ id, lib: todo.lib }));
      setTodo({ ...todo, lib: "" }); // Reset only lib
    }
  };

  return (
    <div className="bg-white shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Write your todo:
          </label>
          <input
            type="text"
            value={todo.lib}
            onChange={(e) => setTodo({ ...todo, lib: e.target.value })}
            className="w-full rounded-md px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add"
            className="rounded-md px-7 py-2 bg-blue-500 text-white hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
};

export default TodoAdd;
