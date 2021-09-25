import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

const AddButton = ({ setIsOpen }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.addButton}
      type="button"
      onClick={() => setIsOpen(true)}
    >
      +
    </Button>
  );
};

export default AddButton;
