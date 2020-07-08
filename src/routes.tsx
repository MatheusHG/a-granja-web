import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import LoginAdmin from './pages/admin/Login';
import HomeAdmin from './pages/admin/Home';

import HomeUser from './pages/user/Home';
import VotingUser from './pages/user/Voting';


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={LoginAdmin} path="/login" />
      <Route component={HomeAdmin} path="/admin" />
      <Route component={HomeUser} path="/" exact />
      <Route component={VotingUser} path="/votar" />
    </BrowserRouter>
  );
};

export default Routes;
