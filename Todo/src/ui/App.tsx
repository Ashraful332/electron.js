/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getTodos, addTodo } from "../services/api";

function App() {
  const [todos, setTodos] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadTodos();
  }, []);

  const handleAdd = async () => {
    await addTodo(title);
    setTitle("");
    loadTodos();
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.title} - {t.completed ? "✔" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;