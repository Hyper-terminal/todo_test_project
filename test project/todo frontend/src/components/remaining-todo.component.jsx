import React from "react";

const RemainingTodo = ({ todos, onTodoUpdate, onTodoDelete }) => {
  const handleUpdate = async (id) => {
    onTodoUpdate(id);
  };

  const handleDelete = async (id) => {
    onTodoDelete(id);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name}: {todo.description}
          <button onClick={() => handleUpdate(todo.id)}>
            Mark as completed
          </button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default RemainingTodo;
