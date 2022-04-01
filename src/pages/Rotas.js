import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Wallet from './Wallet';

class Rotas extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}
export default Rotas;
