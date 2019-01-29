import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  marginOverride: {
    marginTop: 0,
    marginBottom: 0
  }
});

class ChatBox extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className="chatbox-container">
        <div className="chatbox-textarea">
          <Input
            classes={{
              marginNormal: classes.marginOverride
            }}
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
        </div>
        <div className="chatbox-userlist">
          <List dense>
            {
              Array(30).fill(
                <ListItem>
                  <ListItemAvatar>
                    <PersonIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary="sizzlorr"
                    secondary="Idlers-Guild"
                  />
                </ListItem>).map(item => item)
            }
          </List>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(ChatBox);
