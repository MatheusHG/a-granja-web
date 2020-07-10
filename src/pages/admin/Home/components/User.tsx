import React, {useState, useEffect} from 'react';

import {User as UserInterface} from '../../../../interfaces';

const User = (
    {onClick, user, disable}: {
      onClick(user: UserInterface, remove: boolean): void,
      user: UserInterface,
      disable: boolean,
    },
) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(user.marked);
  }, []);

  return (
    <button
      key={Math.random()}
      className="participant-item"
      type="button"
      onClick={() => {
        onClick(user, checked);
        setChecked(!checked);
      }}
      disabled={disable}
    >
      <img
        src={`${process.env.REACT_APP_API}/images/${user.photo}`}
        alt={user.name}
      />
      <h2 style={{margin: 5}}>{user.name}</h2>
      <div className="participant-points">
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
