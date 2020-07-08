import React from 'react';
import {FiUser, FiUnlock, FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import './styles.css';

import logo from '../../../assets/logo.png';

const LoginAdmin = () => {
  return (
    <div id="page-home">
      <div className="content">

        <img
          src={logo}
          alt="Granja"
          width="180vw"
          height="180vh"
          style={{margin: '10px'}}
        />

        <div className="form-login-user">
          <FiUser size='18px' />
          <input type="text" name="text" placeholder="User" />
        </div>
        <div className="form-login-lock">
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
