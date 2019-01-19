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
  barMargin: {
    marginBottom: 8
  }
});

const ManaBar = (props) => {
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
export default withStyles(styles)(ManaBar);
