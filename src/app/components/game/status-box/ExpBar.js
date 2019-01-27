import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  linearColorPrimary: {
    backgroundColor: green[100]
  },
  linearBarColorPrimary: {
    backgroundColor: green[500]
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
    color: 'black',
    width: 200
  }
});

const ExpBar = (props) => {
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
export default withStyles(styles)(ExpBar);
