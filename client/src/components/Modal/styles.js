import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
  },
  modalBody: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    zIndex: 1000,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
});
