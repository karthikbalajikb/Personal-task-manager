import { combineReducers } from "redux";

import List from "./List";
import QuickEditor from "./QuickEditor";
import Card from "./Card";
import Board from "./Board";

export default combineReducers({
  List,
  QuickEditor,
  Card,
  Board
});
