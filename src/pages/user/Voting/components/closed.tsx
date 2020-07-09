import React from 'react';
import Lottie from 'react-lottie';

import './styles.css';
import animation from './urn.json';

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
      <h1>Olá</h1>
    </div>
  );
};

export default close;
