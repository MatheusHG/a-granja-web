import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Switch from 'react-switch';
import {FiLogIn} from 'react-icons/fi';

import {User as UserInterface} from '../../../interfaces';
import api from '../../../services/api';
import {logout} from '../../../services/auth';
import User from './components/User';

import './styles.css';

import reset from './../../../assets/reset.svg';

const HomeAdmin = () => {
  const history = useHistory();

  const [users, setUsers] = useState<UserInterface[]>([]);
  const [chosen, setChosen] = useState<UserInterface[]>([]);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await api.get('/users');
      setUsers(response.data);
    })();
  }, []);

  useEffect(() => console.log(chosen), [chosen]);

  const handleSelect = (user: UserInterface, remove: boolean) => {
    if (remove) {
      const newChosen = chosen.filter((item) => item._id !== user._id);
      setChosen(newChosen);
    } else {
      setChosen([...chosen, user]);
    }
  };

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
        <button type="button" onClick={() => {
          logout();
          history.push('/');
        }}>
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
            users.map((user: UserInterface) =>
              <User onClick={handleSelect} user={user} key={user._id}/>,
            )
          }
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
