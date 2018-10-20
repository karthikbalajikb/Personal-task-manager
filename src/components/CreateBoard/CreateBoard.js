import React from "react";
import PropTypes from "prop-types";

import Styles from "./CreateBoard.module.scss";
import QuickEdit from "../QuickEditModal/QuickEdit";

const CreateBoard = props => (
  <div className={Styles.createboard}>
    <QuickEdit
      cardTitle=""
      placeholder="Board name here"
      btn1Label="Create Board"
      handleSaveEdit={text => {
        props.handleCreateNewBoard(text);
      }}
      handleQuickEditClose={() => {
        props.handleCreateBoardModalClose();
      }}
    />
  </div>
);

CreateBoard.propTypes = {
  handleCreateNewBoard: PropTypes.func,
  handleCreateBoardModalClose: PropTypes.func
};

export default CreateBoard;
