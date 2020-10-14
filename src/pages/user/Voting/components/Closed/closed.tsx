import React from 'react';
import Lottie from 'react-lottie';

import animation from './mill.json';

const close = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="closed-container">
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
      <h1 style={{color: '#F6AE2D'}}>Votações fora do ar!</h1>
      <h3 style={{color: 'white'}}>
        Aguarde para a nova Temporada...
      </h3>
    </div>
  );
};

export default close;
