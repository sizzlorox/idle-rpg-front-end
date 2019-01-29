import React from 'react';

import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  classContainer: {
    textTransform: 'capitalize',
  }
});

const StatsBox = (props) => {
  const { player, classes } = props;
  return (
    <div className="statsbox">
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Stats
          </Typography>
          <Typography className={classes.classContainer} color="textSecondary">
            Strength: {player.stats.str}
          </Typography>
          <Typography className={classes.classContainer} color="textSecondary">
            Dexterity: {player.stats.dex}
          </Typography>
          <Typography className={classes.classContainer} color="textSecondary">
            Endurance: {player.stats.end}
          </Typography>
          <Typography className={classes.classContainer} color="textSecondary">
            Intelligence: {player.stats.int}
          </Typography>
          <Typography className={classes.classContainer} color="textSecondary">
            Luck: {player.stats.luk}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default withStyles(styles)(StatsBox);
