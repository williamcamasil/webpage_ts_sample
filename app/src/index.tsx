import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

// import Home from './screens/Home';
// import ListTeam from './screens/ListTeam';

import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <ListTeam /> */}
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,

  document.getElementById('root'),
);
