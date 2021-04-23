import React, { useState } from "react";
import Todoform from "./todoform";
import Todo from "./todo";
import "./todolist.css";
import axios from "axios";

function TodoLists() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    axios.get("http://localhost:3004/tasks").then((response) => {
      setTodos(response.data);
      console.log(response.data);
    });
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.tasks || /^\s*$/.test(newValue.tasks)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todolistdiv">
      <h1 className="title">What's the plan for today ?</h1>
      <Todoform onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoLists;
