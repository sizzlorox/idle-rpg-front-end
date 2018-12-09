import { SHOW_SPINNER, HIDE_SPINNER, FETCH_COMPLETE, FETCH_IN_PROGRESS } from "../actions/ui";

const initUi = {
  pending: false,
  fetchInProgress: false
};

export function uiReducer(state = initUi, action) {

  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, pending: true };

    case HIDE_SPINNER:
      return { ...state, pending: false };

    case FETCH_IN_PROGRESS:
      return { ...state, fetchInProgress: true };

    case FETCH_COMPLETE:
      return { ...state, fetchInProgress: false };

    default:
      return state;
  }
}
