import React from "react";
import { connect } from "react-redux";

import Styles from "./Boards.module.scss";
import Board from "../components/Board/Board";
import HeaderContainer from "./Header";
import CreateBoardModal from "./CreateBoardModal";

const Boards = props => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <section className={Styles.boards}>
        <h1 className={Styles.boards__header}>All Boards</h1>
        <div className={Styles.boards__item}>
          {props.board.Board.boards.map(d => (
            <Board key={d.id} id={d.id} title={d.title} />
          ))}
          <CreateBoardModal />
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  board: state.Board
});

export default connect(mapStateToProps)(Boards);
