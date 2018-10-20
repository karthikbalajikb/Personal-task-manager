import React, { Component } from "react";
import { connect } from "react-redux";

import { showCreateBoard, addNewBoard } from "../actions/Board";

import Modal from "../components/Modal/Modal";
import CreateBoard from "../components/CreateBoard/CreateBoard";

class CreateBoardModal extends Component {
  render() {
    const { isOpen } = this.props.board.Board;

    return (
      <React.Fragment>
        {isOpen && (
          <Modal>
            <CreateBoard
              handleCreateBoardModalClose={() =>
                this.props.handleCreateBoardModalClose()
              }
              handleCreateNewBoard={text =>
                this.props.handleCreateNewBoard(text)
              }
            />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  board: state.Board
});

const mapDispatchToProps = dispatch => ({
  handleCreateBoardModalClose: () => dispatch(showCreateBoard()),
  handleCreateNewBoard: text => dispatch(addNewBoard(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBoardModal);
