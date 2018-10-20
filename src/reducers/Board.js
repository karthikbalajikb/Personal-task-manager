import { combineReducers } from "redux";

import {
  SHOW_CREATE_BOARD,
  FETCH_ALL_BOARDS,
  ADD_NEW_BOARD,
  ADD_LIST_TO_BOARD,
  REMOVE_LIST_FROM_BOARD
} from "../constants/ActionTypes";

const initialState = {
  isOpen: false,
  Loading: true,
  boards: []
};

const Board = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BOARDS: {
      return {
        ...state,
        Loading: false,
        boards: action.boards
      };
    }

    case ADD_NEW_BOARD: {
      const newBoardsPayload = {
        id: `B${Math.floor(100000000 + Math.random() * 900000000)}`,
        listId: [],
        ...action.board
      };
      return {
        ...state,
        boards: [...state.boards, newBoardsPayload]
      };
    }

    case ADD_LIST_TO_BOARD: {
      const { boardId, listId } = action.list;
      const getBoardIndex = state.boards.findIndex(d => d.id === boardId);

      return {
        ...state,
        ...state.boards[getBoardIndex].listId.push(listId)
      };
    }

    case REMOVE_LIST_FROM_BOARD: {
      const { listId, boardId } = action.payload;
      const getBoardIndex = state.boards.findIndex(b => b.id === boardId);
      const getListIndex = state.boards[getBoardIndex].listId.findIndex(
        l => l === listId
      );
      state.boards[getBoardIndex].listId.splice(getListIndex, 1);
      return {
        ...state
      };
    }

    case SHOW_CREATE_BOARD: {
      return {
        ...state,
        isOpen: !state.isOpen
      };
    }

    default:
      return state;
  }
};

export default combineReducers({ Board });

export const getListIdsByBoardId = (id, boardState, listState) => {
  let data = [];
  const listIds = boardState.Board.boards.find(d => d.id === id);

  if (listIds !== undefined && listIds.listId.length !== 0) {
    const lists = listState.List.List.filter(d => {
      return listIds.listId.includes(d.id);
    });
    data.boards = listIds;
    data.lists = lists;
  } else {
    data.boards = listIds;
    data.lists = [];
  }
  return data;
};
