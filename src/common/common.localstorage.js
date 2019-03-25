import { LOCAL_STORAGE_LABLES } from './common.constant'

/**
 * Store token in local storage
 * @param {string} token 
 */
const storeToken = async (token) => {
    localStorage.setItem(LOCAL_STORAGE_LABLES.TOKEN, token);
}

/**
 * Fetch token from local storage
 */
const getToken = async() => {
    localStorage.getItem(LOCAL_STORAGE_LABLES.TOKEN);
}

export { storeToken, getToken }