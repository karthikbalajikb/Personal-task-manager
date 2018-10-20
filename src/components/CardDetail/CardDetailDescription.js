import React, { Component } from "react";
import PropTypes from "prop-types";

import Styles from "./CardDetail.module.scss";

class CardDetailDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionHeight: "20px",
      descriptionColor: "#e1e1e2",
      descriptionSaveBtn: false
    };
  }

  componentDidMount() {
    this.calculateHeight();

    document
      .getElementById("CardDetailDescription_textarea")
      .addEventListener("change", e => {
        this.handleCardDescriptionOnChange();
      });

    document
      .getElementById("CardDetailDescription_textarea")
      .addEventListener("focus", e => {
        this.handleCardDescriptionOnFocus(true);
      });

    document
      .getElementById("CardDetailDescription_textarea")
      .addEventListener("blur", e => {
        this.handleCardDescriptionOnBlur(false);
      });
  }

  componentWillUnmount() {
    document
      .getElementById("CardDetailDescription_textarea")
      .removeEventListener("change", e => {
        this.handleCardDescriptionOnChange();
      });

    document
      .getElementById("CardDetailDescription_textarea")
      .removeEventListener("focus", e => {
        this.handleCardDescriptionOnFocus(true);
      });

    document
      .getElementById("CardDetailDescription_textarea")
      .removeEventListener("blur", e => {
        this.handleCardDescriptionOnBlur(false);
      });
  }

  calculateHeight = () => {
    const elementHeight = document.getElementById(
      "CardDetailDescription_textarea"
    ).scrollHeight;

    this.setState({ descriptionHeight: `${elementHeight}px` });
  };

  handleCardDescriptionOnChange = () => {
    this.calculateHeight();
    this.handleDescriptionSave();
  };

  handleCardDescriptionOnFocus = flag => {
    this.setState({ descriptionSaveBtn: flag });
  };

  handleCardDescriptionOnBlur = flag => {
    this.setState({ descriptionSaveBtn: flag });
  };

  handleDescriptionSave = () => {
    const value = document.getElementById("CardDetailDescription_textarea")
      .value;
    this.props.handleDescriptionSave(value);
    this.setState({ descriptionSaveBtn: false });
  };

  render() {
    return (
      <div className={Styles.carddescription}>
        <p>Description</p>
        <textarea
          id="CardDetailDescription_textarea"
          className={Styles.carddescription__textarea}
          style={{
            height: this.state.descriptionHeight,
            backgroundColor:
              this.props.description === "" ? "#e1e1e2" : "#ebeef0"
          }}
          placeholder="Add a detailed description here ..."
          defaultValue={this.props.description}
        />
        {this.state.descriptionSaveBtn && (
          <button
            className={Styles.carddescription__savebtn}
            onClick={this.handleDescriptionSave}
          >
            Save
          </button>
        )}
      </div>
    );
  }
}

CardDetailDescription.propTypes = {
  description: PropTypes.string,
  handleDescriptionSave: PropTypes.func
};

export default CardDetailDescription;
