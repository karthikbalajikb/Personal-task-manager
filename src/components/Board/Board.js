import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Styles from "./Board.module.scss";

const Board = props => (
  <article className={Styles.board}>
    <NavLink to={`/b/${props.id}`}>
      <p className={Styles.board__title}>{props.title}</p>
    </NavLink>
  </article>
);

Board.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};

export default Board;
