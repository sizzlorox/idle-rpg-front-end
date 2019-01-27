import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  linearColorPrimary: {
    backgroundColor: blue[100]
  },
  linearBarColorPrimary: {
    backgroundColor: blue[500]
  },
  barHeight: {
    height: '2%',
    width: 200
  },
  barMargin: {
    margin: '12 0',
    textAlign: 'center'
  },
  infoPosition: {
    position: 'absolute',
    zIndex: 1,
    fontSize: '70%',
    color: 'lightgrey',
    width: 200
  }
});

const ManaBar = (props) => {
  const { current, max, classes } = props;
  return (
    <div className={classes.barMargin}>
      <div className={classes.infoPosition}>
        {current} / {max}
      </div>
      <LinearProgress
        className={classes.barHeight}
        classes={{
          colorPrimary: classes.linearColorPrimary,
          barColorPrimary: classes.linearBarColorPrimary,
        }}
        variant="determinate"
        value={(current / max) * 100}
      />
    </div>
  )
}
export default withStyles(styles)(ManaBar);
