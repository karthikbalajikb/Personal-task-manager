import * as ActionTypes from "../constants/ActionTypes";
import ListAPI from "../api/ListAPI";

const fetchAllBoardsAction = boards => ({
  type: ActionTypes.FETCH_ALL_BOARDS,
  boards
});

const showCreateBoardAction = () => ({
  type: ActionTypes.SHOW_CREATE_BOARD
});

const addNewBoardAction = board => ({
  type: ActionTypes.ADD_NEW_BOARD,
  board
});

const addListToBoardAction = list => ({
  type: ActionTypes.ADD_LIST_TO_BOARD,
  list
});

const removeListFromBoardAction = payload => ({
  type: ActionTypes.REMOVE_LIST_FROM_BOARD,
  payload
});

const closeQuickEditorAction = () => ({
  type: ActionTypes.CLOSE_QUICK_EDITOR
});

// Action Creators
export const fetchAllBoards = () => dispatch => {
  const ListService = new ListAPI();
  ListService.fetchAllBoards().then(boards => {
    dispatch(fetchAllBoardsAction(boards));
  });
};

export const showCreateBoard = () => dispatch => {
  dispatch(showCreateBoardAction());
};

export const addNewBoard = title => dispatch => {
  dispatch(addNewBoardAction({ title }));
  dispatch(showCreateBoardAction());
};

export const addListToBoard = (boardId, listId) => dispatch => {
  dispatch(addListToBoardAction({ boardId, listId }));
};

export const removeListFromBoard = (listId, boardId) => dispatch => {
  dispatch(removeListFromBoardAction({ listId, boardId }));
  dispatch(closeQuickEditorAction());
  return Promise.resolve();
};
