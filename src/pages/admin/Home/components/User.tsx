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
      <h2>{user.name}</h2>
      <div className="participant-check">
        <input type="checkbox" checked={checked} readOnly/>
        <p>SELECIONAR</p>
      </div>
    </ button>
  );
};

export default User;
