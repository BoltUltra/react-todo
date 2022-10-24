import React, { useState } from "react";

const Product = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="">
      <h1>My Todo</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add TODO
        </button>
      </form>

      <br />
      <br />

      <h3>list of my todo</h3>
      {todos.map((todo) => (
        <p className="">{todo}</p>
      ))}
    </div>
  );
};

export default Product;
