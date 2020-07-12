import React from 'react';
import Lottie from 'react-lottie';

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
      <h1>Votações fora do ar!</h1>
      <h3>
        Aguarde a apuração dos votos ou a inicialização do novo paredão...
      </h3>
      <footer className="closed-footer">
        <h3>
          Desenvolvido por <a href="https://github.com/MatheusHG">Matheus Henrique </a>
          e <a href="https://github.com/davigsousa">Davi Gomes</a>
        </h3>
      </footer>
    </div>
  );
};

export default close;
