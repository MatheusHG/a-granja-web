import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import reset from './../../../assets/reset.svg';

const HomeAdmin = () => {
  interface User {
    name: string;
    photo: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setUsers([]);
  }, []);


  const handleSwitch = (value: boolean) => {
    console.log('alternado', value);
    setChecked(value);
  };

  return (
    <div className="admin-page-home">
      <div className="admin-header">
        <Switch
          checked={checked}
          onChange={handleSwitch}
          width={100}
          height={40}
        />
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
        <div className="admin-grid">
          {
            users.map((user) => (
              <button
                key={Math.random()}
                className="participant-item"
                type="button"
              >
                <img
                  src={`${process.env.REACT_APP_API}/images/${user.photo}`}
                  alt={user.name}
                />
                <h2>{user.name}</h2>
                <div className="participant-check">
                  <input type="checkbox"/>
                  <p>SELECIONAR</p>
                </div>
              </ button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
