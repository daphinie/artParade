import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
// import {  } from 'react-router-dom';
import useStyles from './styles';

import partyIcon from '../../images/party.png';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolBar}>
          <a href="/" style={{ textDecoration: 'none' }}>
            {' '}
            <h1 className={classes.heading}> art parade</h1>
          </a>
          <img className={classes.image} src={partyIcon} alt="artParade" height="40" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
