import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import logo from '../../utils/NetflixLogo.png';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 20,
    marginRight: 20,
  },
};

const ButtonAppBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor: "black"}}>
        <Toolbar>
          <img className={classes.menuButton} src = {logo} width="100" height="30"/>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Home
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);