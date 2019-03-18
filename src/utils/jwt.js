const AUTH_TOKEN = "GRAPHQL_DEMO_AUTH_TOKEN";

/**
 * Save token to local storage of browser
 * @param {String} token 
 */
export const saveToken = token => {
  window.localStorage.setItem(AUTH_TOKEN, token);
};

/**
 * Fetch token from local storage of browser
 */
export const getToken = () => {
  return window.localStorage.getItem(AUTH_TOKEN);
};

/**
 * Remove token from local storage of browser
 */
export const removeToken = () => {
  window.localStorage.removeItem(AUTH_TOKEN);
};
