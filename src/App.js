import React, { useContext, Fragment, useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import InputForm from './components/InputForm';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthContext } from './context/AuthContext';
import ConfirmSignUp from './components/ConfirmSignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import ConfirmForgotPassword from './components/ConfirmForgotPassword';

function App() {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const { authState, setAuthState, user, signOut, setError } =
    useContext(AuthContext);

  return (
    <div className="App">
      {authState === 'signIn' && (
        <Fragment>
          <h2>Login</h2>
          <Login />
          <p>
            New user?{' '}
            <button
              onClick={() => {
                setAuthState('signUp');
                setError('');
              }}
            >
              Sign Up{' '}
            </button>
          </p>
          <p>
            Forgot password?
            <button
              onClick={() => {
                setAuthState('forgotPassword');
                setError('');
              }}
            >
              Forgot password
            </button>
          </p>
        </Fragment>
      )}

      {authState === 'signUp' && (
        <Fragment>
          <h2>Signup</h2>
          <SignUp />
          <p>
            <button
              onClick={() => {
                setAuthState('signIn');
                setError('');
              }}
            >
              Login Instead
            </button>
          </p>
        </Fragment>
      )}

      {authState === 'confirmSignUp' && <ConfirmSignUp />}
      {authState === 'resetPassword' && (
        <Fragment>
          <h2>Reset Password</h2>
          <ResetPassword />
        </Fragment>
      )}

      {authState === 'forgotPassword' && (
        <Fragment>
          <h2>Forgot Password</h2>
          <ForgotPassword />
          <p>
            <button
              onClick={() => {
                setAuthState('signIn');
                setError('');
              }}
            >
              Login Instead
            </button>
          </p>
        </Fragment>
      )}

      {authState === 'confirmForgotPassword' && (
        <Fragment>
          <h2>Reset Password</h2>
          <ConfirmForgotPassword />
        </Fragment>
      )}

      {authState === 'signedIn' && user && (
        <Fragment>
          <button onClick={async () => await signOut()}>Logout</button>
          <button onClick={() => setChangePasswordOpen(true)}>
            Change Password
          </button>
          <div>Hello, {user.username}</div>
          {changePasswordOpen ? (
            <ResetPassword setChangePasswordOpen={setChangePasswordOpen} />
          ) : (
            <Fragment>
              <InputForm />
              <Todos />
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default App;
