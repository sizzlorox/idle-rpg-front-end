import React from 'react';
import { Switch, Route } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";

import routes from './routes';

// Material UI
import { withStyles } from '@material-ui/core';

// Components
import AppBar from './components/app-bar/AppBar';
import ToasterContainer from './components/ToasterContainer';

const styles = {};
const history = createBrowserHistory()

const App = () => (
  <div className="app-container">
    <AppBar />
    <div className="content">
      <Switch>
        {routes.map((route, index) => <Route key={index} path={route.path} component={route.component} />)}
      </Switch>
    </div>
    <ToasterContainer />
  </div>
)

export default withStyles(styles)(App);
