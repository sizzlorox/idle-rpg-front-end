import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';

const styles = {

};

const LBTable = (props) => {
  const { classes, title, playerList, stat } = props;
  return (
    <Paper>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player Name</TableCell>
            <TableCell>Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playerList.map((player, index) => <TableRow key={index}>
            <TableCell>{player.name}</TableCell>
            <TableCell>{stat.includes('.') ? player[stat.split('.')[0]][stat.split('.')[1]] : player[stat]}</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </Paper>
  )
}
export default withStyles(styles)(LBTable);
