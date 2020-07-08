import React, {useState, useEffect} from 'react';

import './styles.css';

function Voting() {
  interface User {
    name: string;
    photo: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers([
      {
        name: 'Amelie',
        photo: 'amelie.jpeg',
      },
      {
        name: 'André',
        photo: 'andre.jpeg',
      },
      {
        name: 'Simplício',
        photo: 'simplicio.jpeg',
      },
    ]);
  }, []);

  return (
    <section className="voting-background">
      <div className="voting-container">
        <h1 className="voting-title">QUEM VOCÊ DESEJA ELIMINAR DA GRANJA?</h1>

        <div className="voting-grid">
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
                  <p>VOTAR</p>
                </div>
              </ button>
            ))
          }
        </div>

        <button type="submit" className="voting-button">
          Votar
        </button>
      </div>
    </section>
  );
};

export default Voting;
