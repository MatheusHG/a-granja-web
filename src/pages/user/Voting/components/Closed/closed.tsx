import React from 'react';
import Lottie from 'react-lottie';

import animation from './succeess.json';

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
      <h1>Votações fora do ar!</h1>
      <h3 style={{color: 'white'}}>
        Aguarde a apuração dos votos ou o início das votações para a Grande Final...
      </h3>
    </div>
  );
};

export default close;
