import React, { useState } from "react";

const Test = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div>
      <h1>My TODO List</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <h2>List of Todo</h2>
      {todos.map((todo) => (
        <div className="">
          <p>{todo}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
