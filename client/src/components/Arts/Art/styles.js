import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'normal',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    transition: '0.3s',
    '&:hover': {
      transform: 'translateY(-6px)',
    },
  },
  grid: {
    display: 'flex',
  },
  artist: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  tags: {
    padding: '16px 16px',
  },
  caption: {
    padding: '16px 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
