import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';

import CreateCharacter from '../components/game/CreateCharacter';

const styles = theme => ({});

class Game extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CreateCharacter />
      </React.Fragment>
    );
  }
};
export default withStyles(styles)(Game);
