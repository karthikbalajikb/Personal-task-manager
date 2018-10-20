import React from "react";
import PropTypes from "prop-types";

import Styles from "./CardDetail.module.scss";

import CardDetailTitle from "./CardDetailTitle";
import CardDetailDescription from "./CardDetailDescription";
import CardDetailComment from "./CardDetailComment";
import CardDetailActivity from "./CardDetailActivity";

const CardDetail = props => (
  <div className={Styles.carddetail}>
    <CardDetailTitle
      cardTitle={props.cardTitle}
      listTitle={props.listTitle}
      hideCardDetailModal={() => props.hideCardDetailModal()}
    />
    <CardDetailDescription
      description={props.cardDescription}
      handleDescriptionSave={text => props.handleDescriptionSave(text)}
    />
    <CardDetailComment />
    <CardDetailActivity />
  </div>
);

CardDetail.propTypes = {
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  listTitle: PropTypes.string,
  hideCardDetailModal: PropTypes.func,
  handleDescriptionSave: PropTypes.func
};

export default CardDetail;
