import React from 'react';
import { browserHistory, Router } from 'react-router-dom';

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
      <Router history={browserHistory} routes={routes} />
    </div>
    <ToasterContainer />
  </div>
)

export default withStyles(styles)(App);
