import React from 'react';

const Todo = ({ todo }) => {
  const { name, description } = todo;
  return (
    <div>
      <h2>{name} </h2>
      <h4>{description} </h4>
    </div>
  );
};

export default Todo;
