import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { AuthContext } from '../context/AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async ({ username, password, email }) => {
    try {
      setLoading(true);
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log(user);
      setUser(user);
      setLoading(false);
      setError('');
    } catch (error) {
      console.log('error signing up:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const confirmSignUp = async (username, code) => {
    try {
      setLoading(true);
      const user = await Auth.confirmSignUp(username, code);
      setUser(user);
      setLoading(false);
      setError('');
    } catch (error) {
      console.log('error confirming sign up', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const signIn = async ({ username, password }) => {
    try {
      setLoading(true);
      await Auth.signIn(username, password);
      setLoading(false);
    } catch (error) {
      console.log('error signing in', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const forgotPassword = async (username) => {
    try {
      setLoading(true);
      await Auth.forgotPassword(username);
      setError('');
      setLoading(false);
    } catch (error) {
      console.log('error submit forgot password', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const confirmForgotPassword = async (username, code, new_password) => {
    try {
      setLoading(true);
      await Auth.forgotPasswordSubmit(username, code, new_password);
      setError('');
      setLoading(false);
    } catch (error) {
      console.log('error forgot password', error);
      setLoading(false);
      setError(error.message);
    }
  };

  const changePassword = async ({ oldPassword, newPassword }) => {
    try {
      setLoading(true);
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(user, oldPassword, newPassword);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      setError('');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        confirmSignUp,
        forgotPassword,
        confirmForgotPassword,
        changePassword,
        signOut,
        user,
        setUser,
        error,
        setError,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
