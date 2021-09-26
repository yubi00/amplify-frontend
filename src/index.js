import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Amplify, { Auth } from 'aws-amplify';
import config from './config';
import App from './App';
import AuthProvider from './providers/AuthProvider';

Amplify.configure(config);

const getToken = async () => {
  try {
    const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
    return jwtToken;
  } catch (e) {
    console.error(e);
    return '';
  }
};

const httpLink = createHttpLink({
  uri: config.aws_appsync_graphqlEndpoint,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
