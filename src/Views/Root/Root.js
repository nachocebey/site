import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main  from '../Main/main.js';

import './Root.css';

export class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>{<Route path="/" children={<Main />} />}</Switch>
      </Router>
    );
  }
}

export default Root;
