import React from "react";

import Styles from "./QuickMenu.module.scss";

const QuickMenuButton = props => (
  <a className={Styles.quickmenu__btn} onClick={e => props.handleQuickEdit(e)}>
    ...
  </a>
);

export default QuickMenuButton;
