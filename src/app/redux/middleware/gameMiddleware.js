import {
  CREATE_CHARACTER,
  CREATE_CHARACTER_SUCCESS,
  CREATE_CHARACTER_ERROR,
  GET_CHARACTER,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_ERROR
} from '../actions/gameAction';
import { showSpinner } from '../actions/uiAction';
import { apiRequest } from '../actions/apiAction';

const URL = process.env.NODE_ENV.includes('production')
  ? `${process.env.URL}/v1/game/player`
  : 'http://localhost:4000/v1/game/player';

export const createCharacterFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === CREATE_CHARACTER) {
    dispatch(apiRequest('POST', `${URL}/create`, action.payload, CREATE_CHARACTER_SUCCESS, CREATE_CHARACTER_ERROR));
    dispatch(showSpinner());
  }
};

export const getCharacterFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === GET_CHARACTER) {
    dispatch(apiRequest('GET', `${URL}`, undefined, GET_CHARACTER_SUCCESS, GET_CHARACTER_ERROR));
    dispatch(showSpinner());
  }
};

export const gameMiddleware = [createCharacterFlow, getCharacterFlow];
