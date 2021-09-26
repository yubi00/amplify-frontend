import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';
import TodosPage from '../components/TodosPage';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <ProtectedRoute path="/todos" component={TodosPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
