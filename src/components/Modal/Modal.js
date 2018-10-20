import React from "react";

import Styles from "./Modal.module.scss";

const Modal = props => (
  <div className={Styles.modal__container}>{props.children}</div>
);

export default Modal;
