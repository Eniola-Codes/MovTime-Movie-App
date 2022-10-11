import React from "react";
import ReactDOM from "react-dom";
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

const portalElements = document.getElementById("modal-overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElements)}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default Modal;