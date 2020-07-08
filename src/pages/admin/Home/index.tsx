import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import reset from './../../../assets/reset.svg';

const HomeAdmin = () => {
  return (
    <div className="admin-page-home">
      <div className="admin-header">
        <h1>Hello World!</h1>
        <button>
          <FiLogIn size='80px' color='white' />
        </button>
      </div>
      <div className="admin-box">
        <div className="admin-box-header">
          <button>
            <img src={reset} alt="reset" width="50vh" height="50vh" />
          </button>
          <h1>PARTICIPANTES</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
