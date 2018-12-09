import React, { Component } from 'react';

// Material UI
import { withStyles } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';

// Components
import Toaster from './Toaster';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class ToasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  _handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this._handleClose}
      >
        <Toaster
          variant="error"
          className={classes.margin}
          message="This is an error message!"
        />
      </Snackbar>
    );
  }
}
export default withStyles(styles)(ToasterContainer);
