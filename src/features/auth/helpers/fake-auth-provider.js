export const fakeAuthProvider = {
    isAuthenticated: false,
    login: callback => {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    logout: callback => {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};
