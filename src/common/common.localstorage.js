import { LOCAL_STORAGE_LABLES } from './common.constant'

class LocalStorage{

    /**
     * Store token in local storage
     * @param {string} token 
     */
    static storeToken = async (token) => {
        localStorage.setItem(LOCAL_STORAGE_LABLES.TOKEN, token);
    }

    /**
     * Fetch token from local storage
     */
    static getToken = async() => {
        return localStorage.getItem(LOCAL_STORAGE_LABLES.TOKEN);
    }

    /**
     * Clear auth token from 
     */
    static clearToken = async () => {
        localStorage.removeItem(LOCAL_STORAGE_LABLES.TOKEN);
    }

}
export { LocalStorage }