import { UPDATE_ACCOUNT } from "../actions/accountAction";

export function accountReducer(account = [], action) {

  switch (action.type) {

    case UPDATE_ACCOUNT:
      return action.payload;

    default:
      return account;
  }
}