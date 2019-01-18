export const LOGIN_ACCOUNT = '[ACCOUNT] Login';
export const LOGIN_SUCCESS = '[ACCOUNT] Login Success';
export const LOGIN_ERROR = '[ACCOUNT] Login Error';
export const LOGOUT_ACCOUNT = '[ACCOUNT] Logout';
export const LOGOUT_SUCCESS = '[ACCOUNT] Logout Success';
export const LOGOUT_ERROR = '[ACCOUNT] Logout Error';
export const REGISTER_ACCOUNT = '[ACCOUNT] Register';
export const REGISTER_SUCCESS = '[ACCOUNT] Register Success';
export const REGISTER_ERROR = '[ACCOUNT] Register Success';
export const UPDATE_ACCOUNT = '[ACCOUNT] Update';
export const REGISTER_COOKIE = '[ACCOUNT] Register Cookie';

export const loginAccount = (data) => ({
  type: LOGIN_ACCOUNT,
  payload: data,
});

export const registerSession = (data) => ({
  type: REGISTER_COOKIE,
  payload: data,
});

export const logoutAccount = () => ({
  type: LOGOUT_ACCOUNT,
});

export const registerAccount = (data) => ({
  type: REGISTER_ACCOUNT,
  payload: data,
});

export const updateAccount = (data) => ({
  type: UPDATE_ACCOUNT,
  payload: data,
});
