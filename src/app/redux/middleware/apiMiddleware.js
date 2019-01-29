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
      method
    };
    if (auth.getToken()) {
      payload.headers['authorization'] = `Bearer ${auth.getToken()}`;
    }
    if (method === 'POST') {
      payload.body = JSON.stringify(action.payload ? action.payload : {});
    }

    fetch(url, payload)
      .then(response => response.json())
      .then((data) => {
        if (data.message === 'jwt expired') {
          auth.clearSession();
          console.log(data);
          dispatch(showToaster('info', 'Token Expired'));
        }

        dispatch({ type: onSuccess, payload: data })
        if (data.toaster.show) {
          dispatch(showToaster(data.toaster.type, data.message));
        }
        if (data.redirect) {
          document.location.href = data.redirect;
        }
      })
      .catch(error => {
        dispatch({ type: onError, payload: error });
      })
  }
  return next(action)
};
