import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

// import Home from './screens/Home';
import ListTeam from './screens/ListTeam';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <ListTeam />
    <GlobalStyle />
  </React.StrictMode>,

  document.getElementById('root'),
);
