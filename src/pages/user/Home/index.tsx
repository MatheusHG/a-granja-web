import React from 'react';
import {FiMonitor} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from './click.json';

import './styles.css';

import logo from './../../../assets/logo.png';

const HomeUser = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="home-container">
      <Link to="/login" className="home-admin">
        <FiMonitor size='20px' color='white' />
        <h1>Admin</h1>
      </Link>
      <div className="home-img">
        <Link to="/votar">
          <strong>Votar</strong>
          <span>
            <Lottie
              options={defaultOptions}
              height={60}
              width={60}
            />
          </span>
        </Link>
      </div>
      <img src={logo} alt="logo" width="250vw" height="250vh" />
      <footer className="home-footer">
        <h3>
          Desenvolvido por <a href="https://github.com/MatheusHG">Matheus Henrique </a>
          e <a href="https://github.com/davigsousa">Davi Gomes</a>
        </h3>
      </footer>
    </div>
  );
};

export default HomeUser;
