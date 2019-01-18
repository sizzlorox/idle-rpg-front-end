export default {
  createCookie: (key, value) => {
    if (!key) throw new Error('You must set a key');
    if (!value) throw new Error('You must set a value');
    console.log('creating cookie: ', `${key}=${value}`);
    return document.cookie = `${key}=${value}`;
  },

  getCookie: (key) => {
    return document.cookie.split(';').filter((item) => item.find(`${key}=`)).map((item) => item ? item.replace('=', '') : item);
  },

  removeCookie: (key) => {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }
};