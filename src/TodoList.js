import React, { useState } from 'react';

import { NewTodoForm } from './NewTodoForm';
import { Todo } from './Todo';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const setTodoText = t => {
    setText(t);
  };
  const setTodoList = t => {
    setTodos([
      ...todos,
      { id: new Date().getTime().toString(), todo: t, completed: false }
    ]);
  };
  const removeTodo = t => {
    setTodos(todos.filter(todo => todo.id !== t));
  };

  const toggleTodo = t => {
    setTodos(
      todos.map(todo =>
        todo.id === t ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const updateTodo = (t, task) => {
    setTodos(
      todos.map(todo => (todo.id === t ? { ...todo, todo: task } : todo))
    );
  };
  return (
    <>
      <NewTodoForm
        value={text}
        setTodoText={setTodoText}
        setTodoList={setTodoList}
      />
      <div>
        <button onClick={() => setTodos([])}>Reset</button>
        <button
          onClick={() =>
            setTodos(todos.filter(todo => todo.completed !== true))
          }
        >
          Delete Completed
        </button>
      </div>
      <h3>No. of todo: {todos.length}</h3>
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
      {/* <Todo todoList={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} /> */}
      <pre>{JSON.stringify(todos, null, 1)}</pre>
    </>
  );
};
