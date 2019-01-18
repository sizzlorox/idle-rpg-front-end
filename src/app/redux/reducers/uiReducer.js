import { SHOW_TOASTER, HIDE_TOASTER, SHOW_SPINNER, HIDE_SPINNER, FETCH_COMPLETE, FETCH_IN_PROGRESS } from "../actions/uiAction";

const initUi = {
  pending: false,
  fetchInProgress: false,
  toasters: []
};

export function uiReducer(state = initUi, action) {
  switch (action.type) {
    case SHOW_TOASTER:
      return {
        ...state,
        toasters: [
          ...state.toasters,
          {
            ...action.meta
          }
        ]
      };

    case HIDE_TOASTER:
      return {
        ...state,
        toasters: state.toasters.filter(toaster => toaster.key !== action.key)
      }

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
