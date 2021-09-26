import React, { useContext, Fragment } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthContext } from './context/AuthContext';
import ConfirmSignUp from './components/ConfirmSignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import ConfirmForgotPassword from './components/ConfirmForgotPassword';

function App() {
  const { authState, setAuthState, setError } = useContext(AuthContext);

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
    </div>
  );
}

export default App;
