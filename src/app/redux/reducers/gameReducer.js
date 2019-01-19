import { CREATE_CHARACTER_SUCCESS, GET_CHARACTER_SUCCESS } from '../actions/gameAction';

export function gameReducer(game = {}, action) {
  switch (action.type) {
    case CREATE_CHARACTER_SUCCESS:
      return {
        ...game
      };

    case GET_CHARACTER_SUCCESS:
      console.log(game, action);
      return {
        ...game
      };

    default:
      return game;
  }
}
