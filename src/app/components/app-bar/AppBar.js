import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Redux
import { loginAccount, logoutAccount, registerAccount } from '../../redux/actions/accountAction';

// Components
import LoginDialog from './dialogs/LoginDialog';
import RegisterDialog from './dialogs/RegisterDialog';

const styles = {
  container: {
    flexGrow: 1,
  },
  headerLabel: {
    flexGrow: 1,
  },
  menu: {
    float: 'right',
  },
};

class TopAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        isOpen: false,
      },
      register: {
        isOpen: false,
      },
    };
  }

  _handleModal = key => event => {
    this.setState({
      [key]: {
        isOpen: !this.state[key].isOpen
      }
    });
  }

  render() {
    return (
      <AppBar className="header">
        <ToolBar>
          <Typography variant="h6" color="inherit" className={this.props.classes.headerLabel}>
            Idle-RPG
          </Typography>
          <div className={this.props.classes.menu}>
            <Button color="inherit" onClick={this._handleModal('login')} >Login</Button>
            <Button color="inherit" onClick={this._handleModal('register')}>Register</Button>
          </div>
          <LoginDialog
            isOpen={this.state.login.isOpen}
            onClose={this._handleModal('login')}
            onSubmit={loginAccount}
          />
          <RegisterDialog
            isOpen={this.state.register.isOpen}
            onClose={this._handleModal('register')}
            onSubmit={this.props.registerAccount}
          />
        </ToolBar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => ({
  pending: state.ui.pending,
  account: state.account,
});

export default withStyles(styles)(connect(mapStateToProps, {
  loginAccount, logoutAccount, registerAccount
})(TopAppBar));
