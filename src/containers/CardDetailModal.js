import React, { Component } from "react";
import { connect } from "react-redux";

import CardDetail from "../components/CardDetail/CardDetail";
import Modal from "../components/Modal/Modal";

import { hideCardDetailModal, updateCardDescription } from "../actions/Card";

class CardDetailModal extends Component {
  render() {
    const {
      isOpen,
      title,
      description,
      listTitle,
      listId,
      id: cardId
    } = this.props.card.Card;
    return (
      <React.Fragment>
        {isOpen && (
          <Modal>
            <CardDetail
              cardTitle={title}
              cardDescription={description}
              listTitle={listTitle}
              hideCardDetailModal={() => this.props.hideCardDetailModal()}
              handleDescriptionSave={text =>
                this.props.handleDescriptionSave(listId, cardId, text)
              }
            />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  card: state.Card
});

const mapDispatchToProps = dispatch => ({
  hideCardDetailModal: () => dispatch(hideCardDetailModal()),
  handleDescriptionSave: (listId, cardId, text) =>
    dispatch(updateCardDescription(listId, cardId, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardDetailModal);
