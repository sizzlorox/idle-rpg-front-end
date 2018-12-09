import { API_REQUEST } from "../actions/apiAction";

// this middleware care only for API calls
export const apiMiddleware = ({ dispatch }) => next => action => {

  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;
    const payload = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(action.payload)
    };

    fetch(url, payload).then(response => response.json())
      .then((data) => dispatch({ type: onSuccess, payload: data }))
      .catch(error => dispatch({ type: onError, payload: error }))
  }
  return next(action)
};
