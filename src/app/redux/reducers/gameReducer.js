import { CREATE_CHARACTER_SUCCESS, CREATE_CHARACTER_ERROR } from '../actions/gameAction';

export function gameReducer(game = {}, action) {
  switch (action.type) {
    case CREATE_CHARACTER_SUCCESS:
      return {
        ...game
      }

    default:
      return game;
  }
}
