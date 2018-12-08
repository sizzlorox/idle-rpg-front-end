import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import AppBar from './components/app-bar/AppBar';

// Pages
import Home from './pages/Home';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="app-container">
        <AppBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}
