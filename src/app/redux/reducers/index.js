import { combineReducers } from 'redux';
import { accountReducer } from './accountReducer';
import { uiReducer } from './uiReducer';
import { gameReducer } from './gameReducer';

export const reducers = combineReducers({
  ui: uiReducer,
  account: accountReducer,
  game: gameReducer
});