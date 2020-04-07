import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from '../pages/Logon';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import NewIncident from '../pages/NewIncident';
import NotFoundPage from '../pages/ErrorsPage/page404';

import PrivateRoute from '../middlewares/PrivateRoute';
import IsLogged from '../middlewares/IsLogged';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <IsLogged path="/" exact component={Logon} />
        <IsLogged path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
