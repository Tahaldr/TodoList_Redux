import Home from "./components/Home";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav className="bg-blue-500 text-white px-20 py-4 font-bold">
        <div className="flex justify-between">
          <Link to="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/addtodo" className="hover:text-gray-400">
            Add Todo
          </Link>
          <Link to="/listodo" className="hover:text-gray-400">
            Todos
          </Link>
        </div>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/addtodo" element={<TodoAdd />} />
          <Route path="/listodo" element={<TodoList />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
