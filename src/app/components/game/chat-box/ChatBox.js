import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({});

class ChatBox extends Component {
  state = {
    currentChatTab: "global"
  };

  _handleEventTabChange = (event, value) => {
    this.setState({ currentChatTab: value });
  }

  render() {
    const { currentChatTab } = this.state;

    return (
      <div className="chatbox-container">
        <div className="chatbox-textarea">
          <AppBar position="static" color="inherit">
            <Tabs
              value={currentChatTab}
              onChange={this._handleEventTabChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab value="global" label="Global" />
              <Tab value="guild" label="Guild" />
            </Tabs>
            <Input
              multiline
              rows="8"
              rowsMax="50"
              defaultValue="Welcome to Idle-RPG"
              className="flex-grow width-full"
              margin="dense"
              variant="filled"
              readOnly
            />
            <TextField
              className="flex-shrink width-full"
              multiline
            />
          </AppBar>
        </div>
        <div className="chatbox-userlist">
          <List dense>
            {
              Array(30).fill(undefined).map((item, index) => <ListItem key={index}>
                <PersonIcon />
                <ListItemText
                  primary="sizzlorr"
                  secondary="Idlers-Guild"
                />
              </ListItem>)
            }
          </List>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(ChatBox);
