import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import configureStore from "./configureStore";

import App from "./App";
import Boards from "./containers/Boards";

import { fetchAllLists } from "./actions";
import { fetchAllBoards } from "./actions/Board";

export const store = configureStore();

store.dispatch(fetchAllLists());
store.dispatch(fetchAllBoards());

const Root = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Boards} />
        <Route exact path="/b/:id" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
