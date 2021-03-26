import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
// import AppBar from '../../Shared/Components/HeaderAppBar/HeaderAppBar';

import './Root.css';

export class Root extends Component {
  render() {
    return (
      <Router>
        {/* <AppBar /> */}
        {/* <div className="prueba">
          <div class="hero-body">
            <Particles options={particlesOptions} />
            <div class="container">Blue and Small</div>
          </div>
        </div> */}

        <Switch>{<Route path="/" children={<Main />} />}</Switch>
      </Router>
    );
  }
}

export default Root;
