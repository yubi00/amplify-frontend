/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
      email
      todos {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      users {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      todos {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      todos {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserTodos = /* GraphQL */ `
  mutation CreateUserTodos(
    $input: CreateUserTodosInput!
    $condition: ModelUserTodosConditionInput
  ) {
    createUserTodos(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
      todo {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUserTodos = /* GraphQL */ `
  mutation UpdateUserTodos(
    $input: UpdateUserTodosInput!
    $condition: ModelUserTodosConditionInput
  ) {
    updateUserTodos(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
      todo {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserTodos = /* GraphQL */ `
  mutation DeleteUserTodos(
    $input: DeleteUserTodosInput!
    $condition: ModelUserTodosConditionInput
  ) {
    deleteUserTodos(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
      todo {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
