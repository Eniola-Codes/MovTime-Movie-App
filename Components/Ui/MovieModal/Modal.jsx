import React from "react";
import classes from "../../../styles/UiStyle/ModalStyle/Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClosemodal} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <div className={props.className}>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  );
};

export default Modal;
