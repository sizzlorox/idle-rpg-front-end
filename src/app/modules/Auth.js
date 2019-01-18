import cm from '../utils/CookieManager';

export default {
  authenticateUser: (data) => {
    const { username, token } = data;
    if (!token) return new Error('Token not provided');
    cm.createCookie('token', token);
    cm.createCookie('username', username)
  },

  isUserAuthenticated: () => {
    return cm.getCookie('token') !== (null || undefined);
  },

  getUsername: () => {
    return cm.getCookie('username');
  },

  deauthenticateUser: () => {
    cm.removeCookie('token');
  },

  clearSession: () => {
    cm.clearCookies();
  },

  getToken: () => {
    return cm.getCookie('token');
  }
};
