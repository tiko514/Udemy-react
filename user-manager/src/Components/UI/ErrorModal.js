import React from "react";
import ReactDOM from 'react-dom';
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = props => {
  return <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>Ok</Button>
    </footer>
  </Card>;
};

const ErrorModal = (props) => {
  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
