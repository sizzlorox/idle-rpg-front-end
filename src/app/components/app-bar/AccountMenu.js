import React, { Component } from 'react';

import auth from '../../modules/Auth';

import { withStyles } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const style = {};

class AccountMenu extends Component {
  state = {
    anchorEl: null,
  };

  _handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  _handleClose = () => {
    this.setState({ anchorEl: null });
  };

  _handleLogout = () => {
    this.props.onLogout();
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <React.Fragment>
        <IconButton
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this._handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this._handleClose}
        >
          <MenuItem onClick={this._handleClose}>My Account</MenuItem>
          <MenuItem onClick={this._handleLogout}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}
export default withStyles(style)(AccountMenu);
