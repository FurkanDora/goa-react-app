import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.scss';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className="fullpage flex-container column">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <Header style={{ flex: '0' }} />

      <main id="content" className="main-content" style={{ flex: '1' }}>
        <Routes />
      </main>

      <div style={{ flex: '0' }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
