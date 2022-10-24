import React, { useState } from "react";

const Plan = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="glass p-10 rounded-lg space-y-5">
      <h1 className="text-center text-white md:text-5xl uppercase font-bold">
        MY TODO LIST
      </h1>
      <form className="flex bg-white rounded-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent px-5 focus:outline-none"
        />
        <button
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={addTodo}
          className="gradient py-2 text-white px-10 rounded-full"
        >
          Add Todo
        </button>
      </form>
      {todos.map((todo) => (
        <div className="gradient text-white py-2 px-5 rounded">
          <p className="">{todo}</p>
        </div>
      ))}
    </div>
  );
};

export default Plan;
