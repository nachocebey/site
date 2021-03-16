import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import AppBar from '../../Shared/Components/HeaderAppBar/HeaderAppBar';

export class Root extends Component {
  render() {
    return (
      <Router>
        <AppBar />
        <Switch>
          <Route path="/" children={<Main />} />
        </Switch>
      </Router>
    );
  }
}

export default Root;
