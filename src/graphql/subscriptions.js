/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserTodos = /* GraphQL */ `
  subscription OnCreateUserTodos {
    onCreateUserTodos {
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
export const onUpdateUserTodos = /* GraphQL */ `
  subscription OnUpdateUserTodos {
    onUpdateUserTodos {
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
export const onDeleteUserTodos = /* GraphQL */ `
  subscription OnDeleteUserTodos {
    onDeleteUserTodos {
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
