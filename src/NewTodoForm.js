import React from 'react';
export const NewTodoForm = ({ value, setTodoText, setTodoList }) => {
  const handleChanage = e => {
    e.preventDefault();
    setTodoList(value);
    setTodoText('');
  };
  const handleInput = e => {
    setTodoText(e.target.value);
  };
  return (
    <>
      <form onSubmit={e => handleChanage(e)}>
        <input type="text" value={value} onChange={e => handleInput(e)} />
      </form>
    </>
  );
};
