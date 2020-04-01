/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

import NoAuthPage from '../../pages/ErrorsPage/page403';

export default ({ path, component }) => {
  return (
    <>
      {localStorage.getItem('ongId') ? (
        <Route path={path} component={component} />
      ) : (
        <Route path={path} component={NoAuthPage} />
      )}
    </>
  );
};
