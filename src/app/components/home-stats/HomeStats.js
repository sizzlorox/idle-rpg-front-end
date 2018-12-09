import React from 'react';
import { withStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    margin: 12,
  }
};

const PatchNote = (props) => {
  const { classes, title, children } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent>
            Registered Accounts: 1337
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            Players Online: 13
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
export default withStyles(styles)(PatchNote);