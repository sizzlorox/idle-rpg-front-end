import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createCharacter } from '../../redux/actions/gameAction';

import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    alignSelf: 'center',
    margin: '0 auto',
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  }
});

class CreateCharacter extends Component {
  state = {
    name: undefined,
    playerClass: 'warrior',
    gender: 'male'
  };

  _handleChange = key => event => {
    this.setState({
      [key]: event.target.value,
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
    this.props.createCharacter(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <form className={classes.container} autoComplete="off">
          <div>
            <TextField
              id="name-input"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this._handleChange('name')}
              helperText="Please input your characters name (Players will see this)"
              margin="normal"
              variant="outlined"
            />
            <TextField
              select
              id="class-select"
              label="Class"
              className={classes.textField}
              value={this.state.playerClass}
              onChange={this._handleChange('playerClass')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your class"
              margin="normal"
              variant="outlined"
            >
              <option value="warrior">
                Warrior
              </option>
              <option value="thief">
                Thief
              </option>
              <option value="mage">
                Mage
              </option>
            </TextField>
            <TextField
              select
              id="gender-select"
              label="Gender"
              className={classes.textField}
              value={this.state.gender}
              onChange={this._handleChange('gender')}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your gender"
              margin="normal"
              variant="outlined"
            >
              <option value="male">
                Male
              </option>
              <option value="female">
                Female
              </option>
              <option value="neutral">
                Neutral
              </option>
            </TextField>
          </div>
          <Button type="submit" onClick={this._handleSubmit} color="primary">
            Create Character
          </Button>
        </form>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  game: state.game
});

export default withStyles(styles)(connect(mapStateToProps, {
  createCharacter
})(CreateCharacter));
