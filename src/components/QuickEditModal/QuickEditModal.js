import React from "react";
import PropTypes from "prop-types";

import QuickEdit from "./QuickEdit";
import QuickEditMenu from "./QuickEditMenu";
import Styles from "./QuickEditModal.module.scss";

const QuickEditModal = props => {
  const { top, left, height } = props;
  return (
    <article
      className={Styles.quickedit__modal}
      style={{ top: top, left: left }}
    >
      <QuickEdit
        listId={props.listId}
        cardId={props.cardId}
        textHeight={height}
        cardTitle={props.cardTitle}
        handleSaveEdit={text =>
          props.handleSaveEdit(props.listId, props.cardId, text)
        }
        handleQuickEditClose={() => props.handleQuickEditClose()}
      />
      <QuickEditMenu
        handleDeleteCard={() =>
          props.handleDeleteCard(props.listId, props.cardId)
        }
      />
    </article>
  );
};

QuickEditModal.propTypes = {
  listId: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  height: PropTypes.string,
  handleSaveEdit: PropTypes.func,
  handleQuickEditClose: PropTypes.func,
  handleDeleteCard: PropTypes.func
};

export default QuickEditModal;
