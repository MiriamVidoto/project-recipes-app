import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
