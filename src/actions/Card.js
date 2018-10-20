import * as ActionTypes from "../constants/ActionTypes";

const showCardDetailModalAction = payload => ({
  type: ActionTypes.SHOW_CARD_MODAL,
  payload
});

const hideCardDetailModalAction = () => ({
  type: ActionTypes.HIDE_CARD_MODAL
});

const updateCardDescriptionAction = payload => ({
  type: ActionTypes.UPDATE_CARD_DESCRIPTION,
  payload
});

export const showCardDetailModal = (listId, cardId, cardTitle) => (
  dispatch,
  getState
) => {
  const ListState = getState().List.List.List;
  const payload = { listId, cardId, cardTitle, ListState };
  dispatch(showCardDetailModalAction(payload));
};

export const hideCardDetailModal = () => dispatch => {
  dispatch(hideCardDetailModalAction());
};

export const updateCardDescription = (listId, cardId, text) => dispatch => {
  dispatch(updateCardDescriptionAction({ listId, cardId, text }));
};
