
/**
 * Authentication header for every request
 */
const authHeader = () => {
    // return authorization header with basic auth credentials
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'JWT ' + user.token };
    } else {
        return {};
    }
}



export { authHeader }