import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import HeaderContainer from "./containers/Header";
import ListContainer from "./containers/List";
import QuickEditor from "./containers/QuickEditor";
import CardDetailModal from "./containers/CardDetailModal";
import CreateBoardModal from "./containers/CreateBoardModal";

import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <main>
          <div className={styles.app}>
            <ListContainer />
          </div>
          <QuickEditor />
          <CardDetailModal />
          <CreateBoardModal />
        </main>
      </React.Fragment>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
