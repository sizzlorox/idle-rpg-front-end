import {
  LOGIN_ACCOUNT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_ACCOUNT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  REGISTER_ACCOUNT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  registerSession
} from '../actions/accountAction';
import { showSpinner, hideSpinner } from '../actions/uiAction';
import { apiRequest } from '../actions/apiAction';

const URL = process.env.NODE_ENV.includes('production')
  ? `${process.env.URL}/v1/game/auth`
  : 'http://localhost:4000/v1/game/auth';

export const loginAccountFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === LOGIN_ACCOUNT) {
    dispatch(apiRequest('POST', `${URL}/login`, action.payload, LOGIN_SUCCESS, LOGIN_ERROR));
    dispatch(showSpinner());
  }
};

export const logoutAccountFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === LOGOUT_ACCOUNT) {
    dispatch(apiRequest('POST', `${URL}/logout`, action.payload, LOGOUT_SUCCESS, LOGOUT_ERROR));
    dispatch(showSpinner());
  }
};

export const registerAccountFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === REGISTER_ACCOUNT) {
    dispatch(apiRequest('POST', `${URL}/register`, action.payload, REGISTER_SUCCESS, REGISTER_ERROR));
    dispatch(showSpinner());
  }
};

export const updateAccountFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === LOGIN_SUCCESS) {
    dispatch(registerSession(action.payload));
  }
  if (action.type.toLowerCase().includes('success' || 'error')) {
    dispatch(hideSpinner());
  }
};

export const accountMiddleware = [loginAccountFlow, logoutAccountFlow, registerAccountFlow, updateAccountFlow];
