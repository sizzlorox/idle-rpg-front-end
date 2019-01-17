export const SHOW_TOASTER      = '[UI] show toaster';
export const HIDE_TOASTER      = '[UI] hide toaster';
export const SHOW_SPINNER      = '[UI] show spinner';
export const HIDE_SPINNER      = '[UI] hide spinner';
export const FETCH_IN_PROGRESS = '[UI] fetch in progress';
export const FETCH_COMPLETE    = '[UI] fetch complete';

export const showToaster = (type, message) => ({
  type: SHOW_TOASTER,
  meta: { variant: type, message, key: new Date().getTime() + Math.random() }
});

export const hideToaster = (key) => ({
  type: HIDE_TOASTER,
  key
});

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
