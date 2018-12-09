export const SHOW_SPINNER      = '[UI] show spinner';
export const HIDE_SPINNER      = '[UI] hide spinner';
export const FETCH_IN_PROGRESS = '[UI] fetch in progress';
export const FETCH_COMPLETE    = '[UI] fetch complete';

export const showSpinner = () => ({
  type: SHOW_SPINNER
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER
});

export const fetchInProgress = () => ({
  type: FETCH_IN_PROGRESS
});

export const fetchComplete = () => ({
  type: FETCH_COMPLETE
});
