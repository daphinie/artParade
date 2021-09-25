import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  addButton: {
    borderRadius: '5em',
    backgroundColor: 'rgba(255,193,7,255)',
    '&:hover': {
      backgroundColor: 'rgba(255,143,0,255)',
    },
    color: 'white',
    fontSize: 'lg',
    fontWeight: 'bold',
  },
}));
