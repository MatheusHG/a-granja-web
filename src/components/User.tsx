import React, {useState, useEffect} from 'react';

import {User as UserInterface} from '../interfaces';

const User = (
    {onClick, user, disable, showPoints = true, mode, selectedUser}: {
      onClick(user: UserInterface, remove?: boolean): void,
      user: UserInterface,
      disable: boolean,
      showPoints?: boolean,
      selectedUser?: UserInterface,
      mode: 'admin' | 'voting'
    },
) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    console.log('montou');
    if (mode === 'admin') setChecked(user.marked);
  }, []);

  return (
    <button
      key={Math.random()}
      className="participant-item"
      type="button"
      onClick={() => {
        if (mode === 'admin') setChecked(!checked);
        onClick(user, checked);
      }}
      disabled={disable}
    >
      <img
        src={`${process.env.REACT_APP_API}/images/${user.photo}`}
        alt={user.name}
      />
      <h2 style={{margin: 5}}>{user.name}</h2>
      {showPoints && (
        <div className="participant-points">
          <p><strong>{user.points}</strong> votos</p>
        </div>
      )}
      <div className="participant-check" style={{padding: 5}}>
        <input
          type="checkbox"
          checked={mode === 'admin' ? checked : selectedUser?._id === user._id}
          readOnly
        />
        <p>{mode === 'admin' ? 'SELECIONAR' : 'VOTAR'}</p>
      </div>
    </ button>
  );
};

export default User;
