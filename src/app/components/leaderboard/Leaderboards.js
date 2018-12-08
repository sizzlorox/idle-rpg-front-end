import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Components
import LBTable from './LBTable';

const styles = {

};

const mockPlayers = Array(10).fill({
  name: 'lalala',
  level: 10,
  gold: 99999,
  pvp: {
    killCount: 1337,
    deathCount: 8008135
  }
});

const tabs = [{
  key: 'level',
  label: 'Levels',
}, {
  key: 'gold',
  label: 'Gold',
}, {
  key: 'pvp.killCount',
  label: 'PVP Kills',
}, {
  key: 'pvp.deathCount',
  label: 'PVP Deaths',
}];

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: 'Levels',
      value: 'level'
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event, value) {
    this.setState({ label: tabs.find(tab => tab.key === value).label, value });
  }

  getTabContainer() {
    const { label, value } = this.state;
    return (
      <LBTable
        title={`Top 10 ${label}`}
        playerList={mockPlayers}
        stat={value}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="inherit">
          <Tabs
            value={this.state.value}
            onChange={this._handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            {
              tabs.map((tab, index) => <Tab key={index} value={tab.key} label={tab.label} />)
            }
          </Tabs>
        </AppBar>
        {this.getTabContainer()}
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Leaderboard);
