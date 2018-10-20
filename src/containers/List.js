import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import List from "../components/List/List";
import AddButton from "../components/AddButton/AddButton";
import { addNewList, addNewCard, moveCard, openQuickEditor } from "../actions";
import { addListToBoard } from "../actions/Board";
import { showCardDetailModal } from "../actions/Card";
import { getListIdsByBoardId } from "../reducers/Board";

import Styles from "./List.module.scss";

class ListContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={Styles.board_title}>
          {this.props.lists.boards && this.props.lists.boards.title}
        </h2>
        <div className={Styles.list__container}>
          {this.props.lists.lists.map((d, i) => (
            <List
              id={d.id}
              title={d.title}
              cards={d.cards}
              key={d.title + i}
              handleAddNewCard={(id, name) =>
                this.props.handleAddNewCard(id, name)
              }
              handleToggleQuickEdit={(listId, cardId, cardTitle, top, left) =>
                this.props.handleToggleQuickEdit(
                  listId,
                  cardId,
                  cardTitle,
                  top,
                  left
                )
              }
              handleShowCardDetailModal={(listId, cardId, cardTitle) =>
                this.props.handleShowCardDetailModal(listId, cardId, cardTitle)
              }
              handleMoveCard={(
                fromListID,
                listId,
                cardId,
                dropIndex,
                title,
                description
              ) =>
                this.props.handleMoveCard(
                  fromListID,
                  listId,
                  cardId,
                  dropIndex,
                  title,
                  description
                )
              }
              handleListQuickEdit={(listId, listTitle, top, left) =>
                this.props.handleListQuickEdit(
                  listId,
                  this.props.id,
                  listTitle,
                  top,
                  left
                )
              }
            />
          ))}
          <AddButton
            name="Add another List"
            handleAddNewItem={name =>
              this.props.handleAddNewItem(name, this.props.id)
            }
          />
        </div>
      </React.Fragment>
    );
  }
}

ListContainer.defaultProps = {
  lists: {
    boards: {
      title: ""
    }
  }
};

ListContainer.propTypes = {
  Lists: PropTypes.objectOf(
    PropTypes.shape({
      Loading: PropTypes.bool.isRequired,
      List: PropTypes.arrayOf(
        PropTypes.shape({
          cards: PropTypes.array.isRequired,
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        })
      )
    })
  ),
  handleAddNewItem: PropTypes.func.isRequired,
  handleAddNewCard: PropTypes.func.isRequired
};

const mapStateToProps = (state, { match: { params } }) => {
  const id = params.id;
  return {
    lists: getListIdsByBoardId(id, state.Board, state.List),
    id
  };
};

const mapDispatchToProps = dispatch => ({
  handleAddNewItem: (name, boardId) =>
    dispatch(addNewList(name, boardId)).then(newListId => {
      dispatch(addListToBoard(boardId, newListId));
    }),
  handleAddNewCard: (id, name) => dispatch(addNewCard(id, name, "")),
  handleToggleQuickEdit: (listId, cardId, cardTitle, top, left) =>
    dispatch(openQuickEditor(listId, cardId, cardTitle, top, left, "79px")),
  handleShowCardDetailModal: (listId, cardId, cardTitle) =>
    dispatch(showCardDetailModal(listId, cardId, cardTitle)),
  handleMoveCard: (fromListID, listId, cardId, dropIndex, title, description) =>
    dispatch(
      moveCard(fromListID, listId, cardId, dropIndex, title, description)
    ),
  handleListQuickEdit: (listId, boardId, listTitle, top, left) =>
    dispatch(openQuickEditor(listId, boardId, listTitle, top, left, "30px"))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListContainer)
);
