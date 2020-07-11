import React, {useState, useEffect} from 'react';
import {FiUser, FiUnlock, FiLogIn} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';

import api from '../../../services/api';
import {login, isAuthenticated} from '../../../services/auth';

import './styles.css';

import logo from '../../../assets/logo.png';

const LoginAdmin = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    console.log('entrando...');
    const response = await api.post('/login', {username, password});

    const {token} = response.data;

    login(token);
    history.push('/admin');
  };

  useEffect(() => {
    if (isAuthenticated()) history.push('/admin');
  }, [history]);

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
          <input
            type="text"
            name="text"
            placeholder="User"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-lock">
          <FiUnlock size='18px' />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          style={{cursor: 'pointer'}}
        >
          <strong>Entrar</strong>
          <span>
            <FiLogIn size='20px' color='white' />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginAdmin;
