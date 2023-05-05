import React, { useState, useEffect } from "react";
import axios from "axios";
import RemainingTodo from "./components/remaining-todo.component";
import CompletedTodoList from "./components/completed-todo-list.component";
import Form from "./components/form.component";

const API_URL = "http://localhost:3000";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const response = await axios.get(`${API_URL}/`);
    const activeTodos = [];
    const completed = [];
    response.data.forEach((todo) => {
      if (todo.status) {
        completed.push(todo);
      } else {
        activeTodos.push(todo);
      }
    });
    setTodos(activeTodos);
    setCompletedTodos(completed);
  };

  const handleTodoUpdate = async (id) => {
    // Optimistically update the UI
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTodos([
      ...completedTodos,
      todos.find((todo) => todo.id === id),
    ]);

    // Send request to server
    try {
      await axios.put(`${API_URL}/${id}`, { status: true });
    } catch (error) {
      // Revert state and show error message
      getTodos();
      alert("An error occurred while updating the todo");
    }
  };
  
  const handleTodoDelete = async (id) => {
    // Optimistically update the UI
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== id));

    // Send request to server
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      // Revert state and show error message
      getTodos();
      alert("An error occurred while deleting the todo");
    }
  };

  return (
    <>
      <Form />
      <h2>Active Todos</h2>
      <RemainingTodo
        todos={todos}
        onTodoUpdate={handleTodoUpdate}
        onTodoDelete={handleTodoDelete}
      />
      <h2>Completed Todos</h2>
      <CompletedTodoList
        todos={completedTodos}
        onTodoUpdate={handleTodoUpdate}
        onTodoDelete={handleTodoDelete}
      />
    </>
  );
};
export default App;
