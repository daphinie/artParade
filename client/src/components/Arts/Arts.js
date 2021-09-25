import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Art from './Art/Art';
import useStyles from './styles';

const Arts = ({ setCurrentId }) => {
  const arts = useSelector((state) => state.arts);
  const classes = useStyles();

  return (
    !arts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {arts?.map((art) => (
          <Grid key={art._id} item xs={12} sm={4} md={4}>
            <Art art={art} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Arts;
