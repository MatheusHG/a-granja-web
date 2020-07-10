import React, {useState, useEffect} from 'react';

import './styles.css';
import './response.css';

import {User as UserInterface} from '../../../interfaces';
import api from '../../../services/api';
import User from '../../../components/User';
import ClosedVoting from './components/closed';

function Voting() {
  const [isOut, setIsOut] = useState<boolean>(false);
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [
    selected,
    setSelected,
  ] = useState<UserInterface | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const response = await api.get('/poll');
      const participants: UserInterface[] = response.data;

      setIsOut(participants.length !== 3);
      setUsers(participants);
    })();
  }, []);

  const handleParticipant = (user: UserInterface) => {
    setSelected(user);
  };

  const handleVote = async () => {
    if (selected) {
      await api.put('/users', {id: selected?._id});
    }
  };

  return (
    !isOut ?
    (
      <section className="voting-background">
        <div className="voting-container">
          <h1 className="voting-title">QUEM VOCÊ DESEJA ELIMINAR DA GRANJA?</h1>

          <div className="voting-grid">
            {
              users.map((user) => (
                <User
                  user={user}
                  onClick={handleParticipant}
                  key={user._id}
                  showPoints={false}
                  disable={false}
                  mode="voting"
                  selectedUser={selected}
                />
              ))
            }
          </div>

          <button type="submit" className="voting-button" onClick={handleVote}>
          Votar
          </button>
        </div>
      </section>
    ) :
    (
      <ClosedVoting />
    )
  );
};

export default Voting;
