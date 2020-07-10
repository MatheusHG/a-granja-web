import React, {useState, useEffect} from 'react';
import Modal from 'react-responsive-modal';
import {useHistory} from 'react-router-dom';
import Switch from 'react-switch';
import {FiLogIn} from 'react-icons/fi';

import {User as UserInterface} from '../../../interfaces';
import api from '../../../services/api';
import {logout} from '../../../services/auth';
import User from './components/User';

import './styles.css';
import './response.css';

import reset from './../../../assets/reset.svg';

const HomeAdmin = () => {
  const history = useHistory();

  const [users, setUsers] = useState<UserInterface[]>([]);
  const [chosen, setChosen] = useState<UserInterface[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  const getParticipants = async () => {
    const response = await api.get('/users');
    setUsers(response.data);
  };

  useEffect(() => {
    getParticipants();
  }, []);

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
          <button type="button" onClick={() => setAlert(true)}>
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

      <Modal open={alert} onClose={() => setAlert(false)} center>
        <div className="modal-reset">
          <h1>Realmente deseja zerar a votação?</h1>
          <div>
            <button
              id="alert-confirm-modal"
              type="button"
              onClick={async () => {
                await api.delete('/points');
                setAlert(false);
                getParticipants();
              }}
            >
            SIM
            </button>
            <button
              type="button"
              onClick={() => setAlert(false)}>
              NÃO
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomeAdmin;
