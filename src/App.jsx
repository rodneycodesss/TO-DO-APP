import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([{ text: input, done: false }, ...todos]);
    setInput("");
  };

  const toggleTodo = (idx) => {
    setTodos(
      todos.map((todo, i) =>
        i === idx ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          📝 Modern Todo App
        </h1>
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </form>
        <ul className="space-y-3">
          {todos.length === 0 && (
            <li className="text-gray-400 text-center">No tasks yet!</li>
          )}
          {todos.map((todo, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition"
            >
              <div
                className={`flex-1 cursor-pointer select-none ${
                  todo.done ? "line-through text-gray-400" : "text-gray-800"
                }`}
                onClick={() => toggleTodo(idx)}
                title="Toggle complete"
              >
                {todo.text}
              </div>
              <button
                onClick={() => removeTodo(idx)}
                className="ml-4 text-red-500 hover:text-red-700 transition"
                title="Delete"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
