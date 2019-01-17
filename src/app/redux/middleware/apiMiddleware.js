import { API_REQUEST } from "../actions/apiAction";
import { showToaster } from '../actions/uiAction';

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

    fetch(url, payload)
      .then(response => response.json())
      .then((data) => {
        dispatch({ type: onSuccess, payload: data })
        if (data.toaster.show) {
          dispatch(showToaster(data.toaster.type, data.message));
        }
      })
      .catch(error => dispatch({ type: onError, payload: error }))
  }
  return next(action)
};
