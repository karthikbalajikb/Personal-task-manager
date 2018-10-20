import React from "react";
import PropTypes from "prop-types";

import Styles from "./CardDetail.module.scss";

const CardDetailTitle = props => (
  <div className={Styles.cardtitle}>
    <span>
      <p>{props.cardTitle}</p>
      <p className={Styles.cardtitle__subtext}>
        in list{" "}
        <span className={Styles.cardtitle__subtext__listtitle}>
          {props.listTitle}
        </span>
      </p>
    </span>
    <button
      className={Styles.cardtitle__closebtn}
      onClick={() => props.hideCardDetailModal()}
    >
      X
    </button>
  </div>
);

CardDetailTitle.propTypes = {
  cardTitle: PropTypes.string,
  listTitle: PropTypes.string,
  hideCardDetailModal: PropTypes.func
};

export default CardDetailTitle;
