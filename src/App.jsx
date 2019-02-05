import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Jumbotron from 'components/jumbotron';
import PDFooter from 'components/footer';
import Estrogens from './components/estrogens';
import Privacy from './components/privacy';

const App = () => (
  <div>
    <Jumbotron />
    <Switch>
      <Route path="/" exact component={Estrogens} />
      <Route path="/privacy" component={Privacy} />
    </Switch>
    <PDFooter />
  </div>
);

export default hot(module)(App);
