import React from 'react';
import { Switch, Route } from 'react-router';

import routes from './routes';

// Material UI
import { withStyles } from '@material-ui/core';

// Components
import AppBar from './components/app-bar/AppBar';
import ToasterContainer from './components/ToasterContainer';

const styles = {};

const App = () => (
  <div className="app-container">
    <AppBar />
    <div className="content">
      <Switch>
        {routes.map((route, index) => <Route exact key={index} path={route.path} component={route.component()} />)}
      </Switch>
    </div>
    <ToasterContainer />
  </div>
)

export default withStyles(styles)(App);
