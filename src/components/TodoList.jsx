import { useDispatch, useSelector } from "react-redux";
import { remove_todo, toggle_todo } from "../redux/Action";
import { FaTrash } from "react-icons/fa";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md p-6">
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b text-center">
            <th className="py-2 px-4">Id</th>
            <th className="py-2 px-4">Task</th>
            <th className="py-2 px-4">Completed</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr
              key={todo.id}
              className={`border-b text-center ${
                todo.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              <td className="py-2 px-4">{todo.id}</td>
              <td className="py-2 px-4">{todo.lib}</td>
              <td className="py-2 px-4">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggle_todo(todo.id))}
                  className="cursor-pointer"
                />
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => dispatch(remove_todo(todo.id))}
                  disabled={todo.completed}
                  className={`bg-red-500 rounded-md px-7 py-2 text-sm text-white ${
                    todo.completed
                      ? "bg-slate-400 cursor-not-allowed"
                      : "hover:bg-red-600"
                  }`}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
