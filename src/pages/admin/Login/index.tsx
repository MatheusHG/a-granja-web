import React from 'react';
import {FiUser, FiUnlock, FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../../assets/logo.png';

const LoginAdmin = () => {
  return (
    <div id="login-page-home">
      <div className="login-content">

        <img
          src={logo}
          alt="Granja"
          width="180vw"
          height="180vh"
          style={{margin: '10px'}}
        />

        <div className="login-user">
          <FiUser size='18px' />
          <input type="text" name="text" placeholder="User" />
        </div>
        <div className="login-lock">
          <FiUnlock size='18px' />
          <input type="password" name="password" placeholder="Password" />
        </div>

        <Link to="/admin">
          <strong>Entrar</strong>
          <span>
            <FiLogIn size='20px' color='white' />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LoginAdmin;
