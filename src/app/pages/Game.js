import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCharacter } from '../redux/actions/gameAction';

import { withStyles } from '@material-ui/core';

import CreateCharacter from '../components/game/CreateCharacter';
import StatusBox from '../components/game/status-box/StatusBox';
import StatsBox from '../components/game/stats-box/StatsBox';
import EquipBox from '../components/game/equip-box/EquipBox';
import ChatBox from '../components/game/chat-box/ChatBox';

const styles = theme => ({
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'col',
    width: '100%'
  },
  gameContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  equipBoxContainer: {
    display: 'inherit'
  },
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
            <div className={classes.mainContainer}>
              <div className={classes.gameContainer}>
                <div className={classes.statusBoxContainer}>
                  <StatusBox
                    player={game.player}
                  />
                  <StatsBox
                    player={game.player}
                  />
                </div>
                <div className={classes.equipBoxContainer}>
                  <EquipBox
                    player={game.player}
                  />
                </div>
              </div>
              <ChatBox />
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

