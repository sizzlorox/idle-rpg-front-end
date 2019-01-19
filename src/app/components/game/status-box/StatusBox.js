import React from 'react';

import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import HealthBar from './HealthBar';
import ManaBar from './ManaBar';
import ExpBar from './ExpBar';

const styles = theme => ({
  classContainer: {
    textTransform: 'capitalize'
  }
});

const StatusBox = (props) => {
  const { player, classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {player.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Level {player.level}
        </Typography>
        <Typography className={classes.classContainer} color="textSecondary">
          {player.playerClass.name}
        </Typography>
        <HealthBar
          current={player.health.current}
          max={player.health.max}
        />
        <ManaBar
          current={player.mana.current}
          max={player.mana.max}
        />
        <ExpBar
          current={player.experience.current}
          max={100 + (player.level * 15)}
        />
      </CardContent>
    </Card>
  )
}
export default withStyles(styles)(StatusBox);
