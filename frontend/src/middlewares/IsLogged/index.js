/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

import Profile from '../../pages/Dashboard';

export default ({ path, component }) => {
  return (
    <>
      {localStorage.getItem('ongId') ? (
        <Route path={path} component={Profile} />
      ) : (
        <Route path={path} component={component} />
      )}
    </>
  );
};
