export const SHOW_SPINNER      = '[ui] show spinner';
export const HIDE_SPINNER      = '[ui] hide spinner';
export const FETCH_IN_PROGRESS = '[ui] fetch in progress';
export const FETCH_COMPLETE    = '[ui] fetch complete';

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
