import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from 'Components/./App';

ReactDOM.render(
  <HashRouter>
    <div>
      <App />{' '}
    </div>
  </HashRouter>,
  document.getElementById('app'),
);