import React, { Component } from 'react';

import { withStyles } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {};

class EventWindow extends Component {
  state = {
    currentEventTab: "personal"
  };

  _handleEventTabChange = (event, value) => {
    this.setState({ currentEventTab: value });
  }

  render() {
    const { currentEventTab } = this.state;

    return (
      <React.Fragment>
        <AppBar className="eventwindow" position="static" color="inherit">
          <Tabs
            value={currentEventTab}
            onChange={this._handleEventTabChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab value="personal" label="Personal" />
            <Tab value="global" label="Global" />
          </Tabs>
          {
            currentEventTab === 'personal'
              ?
              <Input
                multiline
                className="flex-grow width-full"
                margin="dense"
                variant="filled"
                readOnly
              />
              :
              <Input
                multiline
                className="flex-grow width-full"
                margin="dense"
                variant="filled"
                readOnly
              />
          }
        </AppBar>
      </React.Fragment>
    );
  }

}
export default withStyles(styles)(EventWindow);
