import { API_REQUEST } from "../actions/apiAction";
import { showToaster } from '../actions/uiAction';

import auth from '../../modules/Auth';

// this middleware care only for API calls
export const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta;
    let payload = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method,
      body: action.payload ? action.payload : {}
    };
    if (auth.getToken()) {
      payload.headers['authorization'] = `Bearer ${auth.getToken()}`;
      payload.body['username'] = auth.getUsername();
    }
    payload.body = JSON.stringify(payload.body);

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
