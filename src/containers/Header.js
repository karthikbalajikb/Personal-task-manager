import React, { Component } from "react";
import { connect } from "react-redux";

import { showCreateBoard } from "../actions/Board";

import Header from "../components/Header/Header";

class HeaderContainer extends Component {
  render() {
    return (
      <Header
        title="Personal Task Manager"
        showCreateBoard={() => this.props.showCreateBoard()}
      />
    );
  }
}

const mapStateToProps = state => ({
  board: state.Board
});

const mapDispatchToProps = dispatch => ({
  showCreateBoard: () => dispatch(showCreateBoard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
