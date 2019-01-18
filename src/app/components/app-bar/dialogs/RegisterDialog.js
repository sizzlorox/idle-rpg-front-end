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

class RegisterDialog extends Component {
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
          Register
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            onChange={this._handleChange('username')}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            onChange={this._handleChange('email')}
          />
          <TextField
            required
            margin="dense"
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={this._handleChange('password')}
          />
          <TextField
            required
            margin="dense"
            id="confirm-password"
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            onChange={this._handleChange('confirmPassword')}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={this._handleSubmit} color="primary">
            Register
          </Button>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(RegisterDialog);
