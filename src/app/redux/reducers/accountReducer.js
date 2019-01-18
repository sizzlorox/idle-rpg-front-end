import { REGISTER_COOKIE, UPDATE_ACCOUNT } from '../actions/accountAction';
import Auth from '../../modules/Auth';

export function accountReducer(account = [], action) {
  switch (action.type) {
    case REGISTER_COOKIE:
      Auth.authenticateUser(action.payload.token);
      return action.payload;

    case UPDATE_ACCOUNT:
      return action.payload;

    default:
      return account;
  }
}