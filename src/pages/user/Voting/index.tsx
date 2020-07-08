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
        name: 'Amelie',
        photo: 'amelie.jpeg',
      },
      {
        name: 'Amelie',
        photo: 'amelie.jpeg',
      },
    ]);
  }, []);

  return (
    <section>
      <div>
        <h1>QUEM VOCÊ DESEJA ELIMINAR DA GRANJA?</h1>

        <div>
          {
            users.map((user) => (
              <div key={Math.random()}>
                <img src={user.photo} alt={user.name}/>
                <h2>{user.name}</h2>
                <div>
                  <input type="checkbox"/>
                  <p>VOTAR</p>
                </div>
              </div>
            ))
          }
        </div>

        <button type="submit">
          Votar
        </button>
      </div>
    </section>
  );
};

export default Voting;
