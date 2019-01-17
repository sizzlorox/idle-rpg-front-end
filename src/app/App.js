import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core';

// Components
import AppBar from './components/app-bar/AppBar';
import ToasterContainer from './components/ToasterContainer';

// Pages
import Home from './pages/Home';

const styles = {};

const App = () => (
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
)

export default withStyles(styles)(App);
