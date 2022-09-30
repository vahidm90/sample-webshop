import {useState} from "react";
import {fakeAuthProvider} from "../helpers/fake-auth-provider";
import AuthContext from "../helpers/auth-context";
import {USERS} from "../../../fake-data/users.data";

function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    const login = (loginForm, callback, errorCallback) => {
        const matchedUser = USERS.find(user => user.name === loginForm.get("username"));
        if (matchedUser && (matchedUser.password === loginForm.get("password")))
            return fakeAuthProvider.login(() => {
                setUser(matchedUser);
                callback();
            });
        errorCallback.call();
    };

    const logout = (callback) => {
        return fakeAuthProvider.logout(() => {
            setUser(null);
            if (callback)
                callback();
        });
    };

    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;