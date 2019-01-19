export const CREATE_CHARACTER = '[GAME] Create Character';
export const CREATE_CHARACTER_SUCCESS = '[GAME] Create Character Success';
export const CREATE_CHARACTER_ERROR = '[GAME] Create Character Error';
export const GET_CHARACTER = '[GAME] Get Character';
export const GET_CHARACTER_SUCCESS = '[GAME] Get Character Success';
export const GET_CHARACTER_ERROR = '[GAME] Get Character Error';

export const createCharacter = (data) => ({
  type: CREATE_CHARACTER,
  payload: data,
});

export const getCharacter = () => ({
  type: GET_CHARACTER
})
