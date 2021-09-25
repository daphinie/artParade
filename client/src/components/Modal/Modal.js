import React from 'react';
import ReactDom from 'react-dom';
import Form from '../Form/Form';
import useStyles from './styles';

const Modal = ({ open, onSubmit, onClose }) => {
  const classes = useStyles();
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={classes.overlay}>
        <div className={classes.modalBody}>
          <>
            <button className={classes.closeButton} type="button" onClick={onClose}>x</button>
            <Form onSubmit={onSubmit} />
          </>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
