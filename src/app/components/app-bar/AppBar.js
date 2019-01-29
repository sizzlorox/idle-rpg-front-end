import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import auth from '../../modules/Auth';

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
import AccountMenu from './AccountMenu';
import LoadingBar from './LoadingBar';

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
  links: {
    color: 'inherit',
    textDecoration: 'none'
  }
};

class TopAppBar extends Component {
  state = {
    login: {
      isOpen: false,
    },
    register: {
      isOpen: false,
    },
  };

  _handleModal = key => event => {
    this.setState({
      [key]: {
        isOpen: !this.state[key].isOpen
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="relative" className="header">
          <ToolBar>
            <Typography variant="h6" color="inherit" className={classes.headerLabel}>
              Idle-RPG
            </Typography>
            <div className={classes.menu}>
              {
                auth.isUserAuthenticated()
                  ?
                  <React.Fragment>
                    <Button size="medium" color="inherit">
                      <Link className={classes.links} to="/game">Game</Link>
                    </Button>
                    <AccountMenu onLogout={this.props.logoutAccount} />
                  </React.Fragment>
                  :
                  <React.Fragment>
                    <Button color="inherit" onClick={this._handleModal('login')} >Login</Button>
                    <Button color="inherit" onClick={this._handleModal('register')}>Register</Button>
                    <LoginDialog
                      isOpen={this.state.login.isOpen}
                      onClose={this._handleModal('login')}
                      onSubmit={this.props.loginAccount}
                    />
                    <RegisterDialog
                      isOpen={this.state.register.isOpen}
                      onClose={this._handleModal('register')}
                      onSubmit={this.props.registerAccount}
                    />
                  </React.Fragment>
              }
            </div>
          </ToolBar>
        </AppBar>
        <LoadingBar pending={this.props.pending} />
      </React.Fragment>
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
