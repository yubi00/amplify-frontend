import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { listTodos } from '../graphql/queries';

import Todo from './Todo';

const sortedTodos = (_data) => {
  return [..._data].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
};

const Todos = () => {
  const { data, loading, error } = useQuery(gql(listTodos));

  if (loading) return <p style={{ textAlign: 'center ' }}>Loading...</p>;
  if (error) return <p style={{ textAlign: 'center ' }}>{error.message}</p>;

  return (
    <div>
      {sortedTodos(data?.listTodos?.items)?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
