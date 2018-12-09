import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core';

// Components
import ToasterContainer from './components/toaster/ToasterContainer';
import AppBar from './components/app-bar/AppBar';

// Pages
import Home from './pages/Home';

const styles = {};

const App = ({ classes }) => (
  <div className="app-container">
    <AppBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    </div>
    <ToasterContainer />
  </div>
);
export default withStyles(styles)(App);
