import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";
import "../style.css";
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitTodo = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
    // const btn = document.getElementById("btn");
    // btn.textContent = "update todo";
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitTodo} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        className="container"
        style={{ fontSize: "20px", margin: "20px 15px " }}
        key={todo.id}
        onClick={() => completeTodo}
      >
        {todo.text}
      </div>
      <div
        style={{ fontSize: " 25px", marginTop: " 20px", marginRight: "20px" }}
        className="icons"
      >
        <RiCloseCircleLine
          style={{ cursor: "pointer" }}
          onClick={() => removeTodo(todo.id)}
        />
        <TiEdit
          style={{ cursor: "pointer" }}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}

export default Todo;
