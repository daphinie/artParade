import React from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@material-ui/core/';
// import Twemoji from 'twemoji';
import { format } from 'date-fns';
import useStyles from './styles';

const Art = ({ art }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={art.artFile} title={art.title} />
      {/* <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                </Button>
            </div> */}
      <div className={classes.artist}>
        <Typography variant="body2">{art.artist}</Typography>
        <Typography variant="body2">
          {' '}
          {format(new Date(art.createdAt), 'MMM d, yyyy')}
          {' '}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" component="p">{art.caption}</Typography>
      </CardContent>
      <div className={classes.tags} gutterBottom>
        <Typography variant="body2" color="textSecondary" component="h2">{art.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      {/* <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() =>
                    {}}><Twemoji emoji="👏" fontSize="small" /> Like {art.likeCount} </Button>
                <Button size="small" color="primary" onClick={() =>
                    {}}><Twemoji emoji="🗑️" fontSize="small" /> Delete</Button>
            </CardActions> */}
    </Card>
  );
};

export default Art;
