import React, { useState } from 'react';
export const Todo = ({
  id,
  todo,
  completed,
  removeTodo,
  toggleTodo,
  updateTodo
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo);
  const handleRemove = t => {
    removeTodo(t);
  };
  const handleToggle = t => {
    toggleTodo(t);
  };
  const handleChange = e => {
    setTask(e.target.value);
  };
  const handleUpdate = e => {
    e.preventDefault();
    updateTodo(id, task);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div>
          <form onSubmit={handleUpdate}>
            <input type="text" value={task} onChange={handleChange} />
            <button>Update</button>
          </form>
        </div>
      ) : (
        <li>
          <span style={{ textDecoration: completed ? 'line-through' : '' }}>
            {todo}
          </span>
          <button onClick={() => handleToggle(id)}>
            {completed ? 'Completed' : 'Incomplete'}
          </button>
          <button onClick={() => handleRemove(id)}>X</button>
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        </li>
      )}
      {/* {todoList.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            >
              {todo.todo}
            </span>
            <button onClick={() => handleRemove(todo.id)}>X</button>
            <button>Edit</button>
          </li>
        ))} */}
    </>
  );
};
