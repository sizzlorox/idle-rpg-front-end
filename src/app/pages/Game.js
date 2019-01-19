import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCharacter } from '../redux/actions/gameAction';

import { withStyles } from '@material-ui/core';

import CreateCharacter from '../components/game/CreateCharacter';
import StatusBox from '../components/game/status-box/StatusBox';

const styles = theme => ({
  statusBoxContainer: {
    flexShrink: 1
  }
});

class Game extends Component {
  state = {};

  componentWillMount() {
    this.props.getCharacter();
  }

  render() {
    const { classes, pending, game } = this.props;
    if (pending) {
      return null;
    }
    console.log(game.player);
    return (
      <React.Fragment>
        {
          game.player
            ?
            <div className={classes.statusBoxContainer}>
              <StatusBox
                player={game.player}
              />
            </div>
            :
            <CreateCharacter />
        }
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  game: state.game,
  pending: state.ui.pending,
});

export default withStyles(styles)(connect(mapStateToProps, {
  getCharacter
})(Game));

