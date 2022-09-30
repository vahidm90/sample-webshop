import {useContext} from "react";
import AuthContext from "../helpers/auth-context";


function useAuth() {
    return useContext(AuthContext);
}

export default useAuth;