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
  barMargin: {
    marginBottom: 8
  }
});

const ExpBar = (props) => {
  const { current, max, classes } = props;
  return (
    <LinearProgress
      className={classes.barMargin}
      classes={{
        colorPrimary: classes.linearColorPrimary,
        barColorPrimary: classes.linearBarColorPrimary,
      }}
      variant="determinate"
      value={(current / max) * 100}
    />
  )
}
export default withStyles(styles)(ExpBar);
