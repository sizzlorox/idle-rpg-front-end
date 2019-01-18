import { REGISTER_COOKIE, UPDATE_ACCOUNT, LOGOUT_SUCCESS, LOGIN_SUCCESS, registerSession } from '../actions/accountAction';
import auth from '../../modules/Auth';

export function accountReducer(account = [], action) {
  switch (action.type) {
    case REGISTER_COOKIE:
      auth.authenticateUser(action.payload);
      return action.payload;

    case LOGIN_SUCCESS:
      return action.payload;

    case LOGOUT_SUCCESS:
      auth.clearSession();
      return null;

    case UPDATE_ACCOUNT:
      return action.payload;

    default:
      return account;
  }
}