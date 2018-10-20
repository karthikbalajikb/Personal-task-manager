import React from "react";
import PropTypes from "prop-types";
import Styles from "./QuickEditModal.module.scss";

const QuickEdit = props => (
  <section className={Styles.quickedit}>
    <textarea
      id="quickedit__textarea"
      className={Styles.quickedit__textarea}
      defaultValue={props.cardTitle}
      placeholder={props.placeholder}
      style={{ height: props.textHeight }}
    />
    <div>
      <button
        className={Styles.quickedit__savebtn}
        onClick={() =>
          props.handleSaveEdit(
            document.getElementById("quickedit__textarea").value
          )
        }
      >
        {props.btn1Label}
      </button>
      <button
        className={Styles.quickedit__closebtn}
        onClick={props.handleQuickEditClose}
      >
        Close
      </button>
    </div>
  </section>
);

QuickEdit.defaultProps = {
  placeholder: "",
  btn1Label: "Save",
  textHeight: "79px"
};

QuickEdit.propTypes = {
  listId: PropTypes.string,
  cardId: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  btn1Label: PropTypes.string,
  textHeight: PropTypes.string,
  handleSaveEdit: PropTypes.func,
  handleQuickEditClose: PropTypes.func
};

export default QuickEdit;
