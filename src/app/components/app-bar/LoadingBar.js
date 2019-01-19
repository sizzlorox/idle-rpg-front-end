import React from 'react';

import { withStyles } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import Collapse from '@material-ui/core/Collapse';

const styles = {
  root: {
    flexGrow: 1,
  }
};

const LoadingBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Collapse in={props.pending}>
        <LinearProgress />
      </Collapse>
    </div>
  );
};
export default withStyles(styles)(LoadingBar);
