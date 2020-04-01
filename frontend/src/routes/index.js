import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from '../pages/Logon';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import NewIncident from '../pages/NewIncident';
import NotFoundPage from '../pages/ErrorsPage/page404';

import PrivateRoute from '../components/PrivateRoute';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />
        {/* <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};
