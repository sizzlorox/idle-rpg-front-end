import React, { Component } from 'react';
import { createHash } from 'crypto';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core';

const styles = {};

class LoginDialog extends Component {
  state = {
    username: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  };

  _handleChange = key => event => {
    this.setState({
      [key]: key === 'password' ? createHash('sha256').update(event.target.value).digest('hex') : event.target.value,
    });
  };

  _handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        <DialogTitle>
          Login
    </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            fullWidth
            onChange={this._handleChange('username')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={this._handleChange('password')}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={this._handleSubmit} color="primary">
            Login
      </Button>
          <Button onClick={onClose} color="primary">
            Cancel
      </Button>
        </DialogActions>
      </Dialog>
    );
  }
};
export default withStyles(styles)(LoginDialog);
