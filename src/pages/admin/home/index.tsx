import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import reset from './../../../assets/reset.svg';

const homeAdmin = () => {
  return (
    <div className="page-home">
      <div className="header">
        <h1>Hello World!</h1>
        <button>
          <FiLogIn size='80px' color='white' />
        </button>
      </div>
      <div className="box">
        <div className="box-header">
          <button>
            <img src={reset} alt="reset" width="50vh" height="50vh" />
          </button>
          <h1>PARTICIPANTES</h1>
        </div>
      </div>
    </div>
  );
};

export default homeAdmin;
