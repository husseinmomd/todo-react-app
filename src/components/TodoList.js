import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "../style.css";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // console.log(todo, ...todos);
  };
  //   edit todo function
  const updateTodo = (todoId, newVal) => {
    if (!newVal.text || /^\s*$/.test(newVal.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newVal : item))
    );
  };

  //   remove todo function
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  const completeTodo = (id) => {
    var updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="title">
        What's the plane for Today??
      </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default TodoList;
