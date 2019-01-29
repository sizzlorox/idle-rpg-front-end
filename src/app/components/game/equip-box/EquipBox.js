import React from 'react';

import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  equipContainer: {
    textTransform: 'capitalize',
  },
});

const EquipBox = (props) => {
  const { player, classes } = props;
  return (
    <div className="equipbox">
      <Card className={classes.card}>
        <CardContent className={classes.equipContainer}>
          <Typography variant="h5" component="h2">
            Equipment
          </Typography>
          {
            Object.keys(player.equipment)
              .map(key => (
                <React.Fragment key={key}>
                  {
                    key !== 'relic'
                      ?
                      <React.Fragment>
                        <Typography variant="subheading">
                          {key}: {player.equipment[key].name}
                        </Typography>
                        {
                          player.equipment[key].attackType
                            ?
                            <Typography color="textSecondary" gutterBottom>
                              Attack Type: {player.equipment[key].attackType}
                            </Typography>
                            :
                            null
                        }
                        <Typography color="textSecondary" gutterBottom>
                          Power: {player.equipment[key].power}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Value: {player.equipment[key].gold}
                        </Typography>
                      </React.Fragment>
                      :
                      <React.Fragment>
                        <Typography variant="subheading">
                          {key}: {player.equipment[key].name}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Strength: {player.equipment[key].str}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Dexterity: {player.equipment[key].dex}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Endurance: {player.equipment[key].end}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Intelligence: {player.equipment[key].int}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Luck: {player.equipment[key].luk}
                        </Typography>
                      </React.Fragment>
                  }
                </React.Fragment>
              ))
          }
        </CardContent>
      </Card>
    </div>
  )
}
export default withStyles(styles)(EquipBox);
