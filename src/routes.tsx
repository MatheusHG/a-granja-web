import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import loginAdmin from './pages/admin/login';
import homeAdmin from './pages/admin/home';

import homeUser from './pages/user/home';
import votingUser from './pages/user/Voting';


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={loginAdmin} path="/login" />
      <Route component={homeAdmin} path="/admin" />
      <Route component={homeUser} path="/" exact />
      <Route component={votingUser} path="/votar" />
    </BrowserRouter>
  );
};

export default Routes;
