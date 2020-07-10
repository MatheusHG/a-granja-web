import React, {useState} from 'react';

import {User as UserInterface} from '../../../../interfaces';

const User = (
    {onClick, user}: {
      onClick(user: UserInterface, remove: boolean): void,
      user: UserInterface
    },
) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <button
      key={Math.random()}
      className="participant-item"
      type="button"
      onClick={() => {
        onClick(user, checked);
        setChecked(!checked);
      }}
    >
      <img
        src={`${process.env.REACT_APP_API}/images/${user.photo}`}
        alt={user.name}
      />
      <h2 style={{margin: 5}}>{user.name}</h2>
      <div style={{
        fontSize: 18,
        border: '1px solid red',
        borderRadius: '8px',
        padding: '3px'}}
      >
        <p><strong>{user.points}</strong> votos</p>
      </div>
      <div className="participant-check" style={{padding: 5}}>
        <input type="checkbox" checked={checked} readOnly/>
        <p>SELECIONAR</p>
      </div>
    </ button>
  );
};

export default User;
