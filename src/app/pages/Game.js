import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCharacter } from '../redux/actions/gameAction';

import { withStyles } from '@material-ui/core';

import CreateCharacter from '../components/game/CreateCharacter';

const styles = theme => ({});

class Game extends Component {
  state = {};

  componentWillMount() {
    this.props.getCharacter();
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CreateCharacter />
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  game: state.game
});

export default withStyles(styles)(connect(mapStateToProps, {
  getCharacter
})(Game));

