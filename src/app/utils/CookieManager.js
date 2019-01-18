export default {
  createCookie: (key, value) => {
    if (!key) throw new Error('You must set a key');
    if (!value) throw new Error('You must set a value');
    return document.cookie = `${key}=${value}`;
  },

  getCookie: (key) => {
    const cookies = document.cookie.replace(/ /g, '').split(';').filter(cookie => cookie !== "");
    return cookies.length > 0 ? cookies.filter((item) => item.startsWith(`${key}=`)).map((item) => item ? item.replace(`${key}=`, '') : item)[0] : undefined;
  },

  removeCookie: (key) => {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  },

  clearCookies: () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++)
      document.cookie = `${cookies[i].split("=")[0]}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
  }
};