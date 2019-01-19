export const CREATE_CHARACTER = '[GAME] Create Character';
export const CREATE_CHARACTER_SUCCESS = '[GAME] Create Character Success';
export const CREATE_CHARACTER_ERROR = '[GAME] Create Character Error';

export const createCharacter = (data) => ({
  type: CREATE_CHARACTER,
  payload: data,
});