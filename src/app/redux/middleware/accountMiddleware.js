import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT, REGISTER_ACCOUNT, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_ERROR, registerSession, updateAccount } from '../actions/accountAction';
import { showSpinner, hideSpinner } from '../actions/uiAction';
import { apiRequest } from '../actions/apiAction';

const URL = process.env.NODE_ENV.includes('production')
  ? `${process.env.URL}/v1/game/auth`
  : 'http://localhost:4000/v1/game/auth';

export const loginAccountFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === LOGIN_ACCOUNT) {
    dispatch(apiRequest('POST', `${URL}/login`, action.payload, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_ERROR));
    dispatch(showSpinner());
  }
};

export const logoutAccountFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === LOGOUT_ACCOUNT) {
    dispatch(apiRequest('POST', `${URL}/logout`, action.payload, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_ERROR));
    dispatch(showSpinner());
  }
};

export const registerAccountFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === REGISTER_ACCOUNT) {
    dispatch(apiRequest('POST', `${URL}/register`, action.payload, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_ERROR));
    dispatch(showSpinner());
  }
};

export const updateAccountFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === FETCH_ACCOUNT_SUCCESS) {
    dispatch(updateAccount(action.payload));
    dispatch(registerSession(action.payload));
    dispatch(hideSpinner());
  }
};

export const accountMiddleware = [loginAccountFlow, logoutAccountFlow, registerAccountFlow, updateAccountFlow];
