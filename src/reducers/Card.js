import { combineReducers } from "redux";

import { SHOW_CARD_MODAL, HIDE_CARD_MODAL } from "../constants/ActionTypes";

const initialState = {
  isOpen: false,
  id: "",
  title: "",
  description: "",
  listId: "",
  listTitle: ""
};

const Card = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CARD_MODAL: {
      const { listId, cardId, ListState } = action.payload;
      const getListIndex = ListState.findIndex(l => l.id === listId);
      const getListId = ListState[getListIndex].id;
      const getListTitle = ListState[getListIndex].title;
      const getCardIndex = ListState[getListIndex].cards.findIndex(
        c => c.id === cardId
      );

      return {
        ...state,
        ...ListState[getListIndex].cards[getCardIndex],
        listId: getListId,
        listTitle: getListTitle,
        isOpen: !state.isOpen
      };
    }

    case HIDE_CARD_MODAL: {
      return {
        ...state,
        isOpen: !state.isOpen
      };
    }

    default:
      return state;
  }
};

export default combineReducers({ Card });
