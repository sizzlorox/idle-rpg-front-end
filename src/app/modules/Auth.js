import { createCookie, getCookie, removeCookie } from '../utils/CookieManager';

class Auth {

  static authenticateUser(token) {
    createCookie('token', token);
  }

  static isUserAuthenticated() {
    return getCookie('token') !== (null || undefined);
  }

  static deauthenticateUser() {
    removeCookie('token');
  }

  static getToken() {
    return getCookie('token');
  }

}

export default Auth;