import React, {ElementType} from 'react';
import {Route, BrowserRouter, Redirect} from 'react-router-dom';

import {isAuthenticated} from './services/auth';

import LoginAdmin from './pages/admin/Login';
import HomeAdmin from './pages/admin/Home';

import HomeUser from './pages/user/Home';
import VotingUser from './pages/user/Voting';

const PrivateRoute = (
    {component: Component, ...rest} : { component: ElementType, path: string},
) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated() ?
        <Component {...props} /> :
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
    )}
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={LoginAdmin} path="/login" />
      <PrivateRoute component={HomeAdmin} path="/admin" />
      <Route component={HomeUser} path="/" exact />
      <Route component={VotingUser} path="/votar" />
    </BrowserRouter>
  );
};

export default Routes;
