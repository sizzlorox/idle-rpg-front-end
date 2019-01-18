export const LOGIN_ACCOUNT = '[ACCOUNT] Login';
export const LOGOUT_ACCOUNT = '[ACCOUNT] Logout';
export const REGISTER_ACCOUNT = '[ACCOUNT] Register';
export const UPDATE_ACCOUNT = '[ACCOUNT] Update';
export const FETCH_ACCOUNT_SUCCESS = '[ACCOUNT] Fetch Success';
export const FETCH_ACCOUNT_ERROR = '[ACCOUNT] Fetch Error';
export const REGISTER_COOKIE = '[ACCOUNT] Register Cookie';

export const loginAccount = (data) => ({
  type: LOGIN_ACCOUNT,
  payload: data,
});

export const registerSession = (data) => ({
  type: REGISTER_COOKIE,
  payload: data,
});

export const logoutAccount = (data) => ({
  type: LOGOUT_ACCOUNT,
  payload: data,
});

export const registerAccount = (data) => ({
  type: REGISTER_ACCOUNT,
  payload: data,
});

export const updateAccount = (data) => ({
  type: UPDATE_ACCOUNT,
  payload: data,
});
