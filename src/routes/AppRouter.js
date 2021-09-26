import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForgotPassword from '../components/ForgotPassword';
import ConfirmForgotPassword from '../components/ConfirmForgotPassword';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import TodosPage from '../components/TodosPage';
import ProtectedRoute from './ProtectedRoute';
import ConfirmSignUp from '../components/ConfirmSignUp';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route
          path="/confirm-forgot-password"
          component={ConfirmForgotPassword}
        />
        <Route path="/confirm-signup" component={ConfirmSignUp} />
        <ProtectedRoute path="/todos" component={TodosPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
