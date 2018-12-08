import React from 'react';
import { withStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    margin: 12,
  },
  title: {
    margin: '16px',
  },
  author: {
    margin: '16px',
    fontSize: '12px',
  }
};

const PatchNote = (props) => {
  const { classes, title, children } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <h2 style={styles.margin}>
          {title}
        </h2>
        <div style={styles.author}>
          Author &middot; {new Date().toDateString()}
        </div>
        <hr />
        {children}
      </CardContent>
    </Card>
  );
}
export default withStyles(styles)(PatchNote);