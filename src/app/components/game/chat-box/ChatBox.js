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
  chatBoxContainer: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow: 1,
    bottom: 0
  },
  chatContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'col',
    flexGrow: 1
  },
  classContainer: {
    textTransform: 'capitalize',
  },
  userListContainer: {
    display: 'flex',
    flexShrink: 1,
    overflow: 'auto',
    height: 220
  },
  textArea: {
    width: '100%',
    flexGrow: 1
  },
  textField: {
    width: '100%',
    flexShrink: 1
  },
  marginOverride: {
    marginTop: 0,
    marginBottom: 0
  }
});

class ChatBox extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.chatBoxContainer}>
        <div className={classes.chatContainer}>
          <Input
            classes={{
              marginNormal: classes.marginOverride
            }}
            multiline
            rows="8"
            rowsMax="50"
            defaultValue="Welcome to Idle-RPG"
            className={classes.textArea}
            margin="dense"
            variant="filled"
            readOnly
          />
          <TextField
            className={classes.textField}
            multiline
          />
        </div>
        <div className={classes.userListContainer}>
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
