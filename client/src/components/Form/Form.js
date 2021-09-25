/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import {
  TextField, Button, Paper,
} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createArt } from '../../actions/arts';

const Form = () => {
  const [artData, setArtData] = useState({
    artist: '', caption: '', tags: '', artFile: '',
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createArt(artData));
  };

  const clear = () => {

  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className="${classes.root} ${classes.form}" onSubmit={handleSubmit}>
        <h2 className={classes.heading}> Parade your art!</h2>
        <TextField name="artist" variant="outlined" label="Artist" fullWidth value={artData.artist} onChange={(e) => setArtData({ ...artData, artist: e.target.value })} />
        <TextField name="caption" variant="outlined" label="Caption" fullWidth value={artData.caption} onChange={(e) => setArtData({ ...artData, caption: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={artData.tags} onChange={(e) => setArtData({ ...artData, tags: e.target.value })} />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setArtData({ ...artData, artFile: base64 })} />
          <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
          <Button className={classes.buttonClear} variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
