import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from './../../../assets/logo.png';

const HomeUser = () => {
  return (
    <div className="container">
      <div className="img">
        <Link to="/votar">
          <strong>Votar</strong>
          <span>
            <FiLogIn size='20px' color='white' />
          </span>
        </Link>
      </div>
      <img src={logo} alt="logo" width="250vw" height="250vh" />

    </div>
  );
};

export default HomeUser;
