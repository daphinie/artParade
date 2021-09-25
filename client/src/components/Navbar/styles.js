import { makeStyles } from '@material-ui/core';
import 'typeface-nova-round';

export default makeStyles(() => ({
  appBar: {
    margin: '0px 0px 35px 0px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    boxShadow: '0px 0px',
  },
  heading: {
    fontFamily: 'Nova Round',
    color: 'white',
    margin: '10px 10px 10px 20px',
  },
  image: {
    margin: '10px 10px 10px 10px',
  },
}));
