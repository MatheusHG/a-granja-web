import React from 'react';
import './App.css';
import 'react-responsive-modal/styles.css';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <footer className="home-footer">
        <h3>
          Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/matheushgo_/">Matheus Henrique </a>
          e <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/davig_sousa/">Davi Gomes</a>
        </h3>
      </footer>
    </>
  );
}

export default App;
