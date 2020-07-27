import React from 'react';
import Lottie from 'react-lottie';

import animation from './succeess.json';

const success = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="success-container">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{marginTop: '-160px'}}
      />
      <h1 style={{color: 'white'}}>Voto computado com Sucesso!</h1>
    </div>
  );
};

export default success;
