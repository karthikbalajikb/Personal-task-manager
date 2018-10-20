import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Styles from "./Header.module.scss";

const Header = props => (
  <header className={Styles.page__header}>
    <h3 className={Styles.page__header__title}>{props.title}</h3>
    <NavLink className={Styles.page__header__boardbtn} to="/">
      boards
    </NavLink>
    <a
      className={Styles.page__header__createbtn}
      onClick={() => props.showCreateBoard()}
    >
      {" "}
      +{" "}
    </a>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showCreateBoard: PropTypes.func
};

export default Header;
