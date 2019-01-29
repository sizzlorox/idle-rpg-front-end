import React from 'react';

import { withStyles } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import Collapse from '@material-ui/core/Collapse';

const styles = {};

const LoadingBar = (props) => {
  const { classes } = props;

  return (
    <Collapse in={props.pending}>
      <LinearProgress />
    </Collapse>
  );
};
export default withStyles(styles)(LoadingBar);
