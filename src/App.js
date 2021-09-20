import React, { useState, useEffect } from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import './App.css';
import Todos from './components/Todos';
import InputForm from './components/InputForm';

function App() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  const onAuthStateChange = () => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  };

  useEffect(() => {
    onAuthStateChange();
  }, []);

  if (authState === AuthState.SignedIn && user)
    return (
      <div className="App">
        <AmplifySignOut />
        <div>Hello, {user.username}</div>
        <InputForm />
        <Todos />
      </div>
    );

  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: 'username' },
          { type: 'password' },
          { type: 'email' },
        ]}
      />
    </AmplifyAuthenticator>
  );
}

export default App;
