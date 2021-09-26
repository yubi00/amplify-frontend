import React, { useContext, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const getAuthenticatedUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
      setLoaded(true);
    } catch (error) {
      console.log('auth error: ', error);
      setLoaded(true);
      setUser(null);
    }
  };

  useEffect(() => {
    getAuthenticatedUser();
  }, []);

  if (!loaded) return <p>Loading...</p>;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;
