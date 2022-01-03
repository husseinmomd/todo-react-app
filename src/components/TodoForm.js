import React, { useState, useRef, useEffect } from "react";
import "../style.css";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form " onSubmit={handleSubmit}>
      <label
        style={{ fontSize: "25px", fontWeight: "bold" }}
        htmlFor="exampleInputEmail1"
      >
        Your Todo
      </label>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="form-control"
        id="usr"
        onChange={handleChange}
        ref={inputRef}
      />

      <button
        id="btn"
        style={{ marginTop: "10px" }}
        className="btn btn-primary "
      >
        {props.edit ? "Update" : "Add "}
      </button>
    </form>
  );
}

export default TodoForm;
