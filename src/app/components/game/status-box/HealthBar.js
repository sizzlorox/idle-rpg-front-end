import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  linearColorPrimary: {
    backgroundColor: red[100]
  },
  linearBarColorPrimary: {
    backgroundColor: red[500]
  },
  barMargin: {
    marginBottom: 8
  }
});

const HealthBar = (props) => {
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
export default withStyles(styles)(HealthBar);
