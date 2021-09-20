import { useMutation, gql } from '@apollo/client';
import React, { useState } from 'react';
import { createTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';

const InputForm = () => {
  const [values, setValues] = useState({ name: '', description: '' });
  const [CreateTodo, { loading, error }] = useMutation(gql(createTodo), {
    update: (cache, { data: { createTodo } }) => {
      const existingTodos = cache.readQuery({ query: gql(listTodos) });

      if (existingTodos) {
        cache.writeQuery({
          query: gql(listTodos),
          data: {
            listTodos: {
              ...existingTodos.listTodos,
              items: [...existingTodos.listTodos.items, createTodo],
            },
          },
        });
      }
    },
    onCompleted: (_data) => {
      setValues({ name: '', description: '' });
    },
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CreateTodo({
      variables: {
        input: {
          ...values,
        },
      },
    });
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <p>Error adding new todo ....</p>}
      <input
        type="text"
        placeholder="name"
        name="name"
        value={values.name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        value={values.description}
        onChange={onChange}
      />
      <button>{loading ? 'Loading...' : 'Save'}</button>
    </form>
  );
};

export default InputForm;
