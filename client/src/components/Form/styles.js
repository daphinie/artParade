import { makeStyles } from '@material-ui/core/styles';
import 'typeface-nova-round';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '20px 0',
  },
  buttonSubmit: {
    fontFamily: 'Nova Round',
    margin: '20px 0 10px 0',
    backgroundColor: 'rgb(143, 201, 99)',
  },
  buttonClear: {
    fontFamily: 'Nova Round',
    margin: '10px 0',
    backgroundColor: 'rgba(244,67,54,255)',
  },
  heading: {
    fontFamily: 'Nova Round',
  },
}));
