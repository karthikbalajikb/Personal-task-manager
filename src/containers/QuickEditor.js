import React, { Component } from "react";
import { connect } from "react-redux";

import QuickEditModal from "../components/QuickEditModal/QuickEditModal";
import {
  updateCardTitle,
  closeQuickEditor,
  deleteCard,
  updateListTitle,
  deleteList
} from "../actions";
import { removeListFromBoard } from "../actions/Board";

import Styles from "./QuickEditor.module.scss";

class QuickEditor extends Component {
  render() {
    const {
      isOpen,
      listId,
      cardId,
      cardTitle,
      top,
      left,
      height
    } = this.props.quickeditor.QuickEditor;

    return (
      <React.Fragment>
        {isOpen ? (
          <div className={Styles.quickeditor}>
            <QuickEditModal
              listId={listId}
              cardId={cardId}
              cardTitle={cardTitle}
              top={top}
              left={left}
              height={height}
              handleSaveEdit={(listId, cardId, text) =>
                this.props.handleSaveEdit(listId, cardId, text)
              }
              handleQuickEditClose={() => this.props.handleQuickEditClose()}
              handleDeleteCard={(listId, cardId) =>
                this.props.handleDeleteCard(listId, cardId)
              }
            />
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quickeditor: state.QuickEditor
});

const mapDispatchToProps = dispatch => ({
  handleSaveEdit: (listId, cardId, text) => {
    if (cardId[0] === "B") {
      return dispatch(updateListTitle(listId, cardId, text));
    } else {
      return dispatch(updateCardTitle(listId, cardId, text));
    }
  },
  handleQuickEditClose: () => dispatch(closeQuickEditor()),
  handleDeleteCard: (lid, cid) => {
    if (cid[0] === "B") {
      return dispatch(removeListFromBoard(lid, cid)).then(() => {
        dispatch(deleteList(lid));
      });
    } else {
      return dispatch(deleteCard(lid, cid));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickEditor);
