import useAuth from "../hooks/auth.hook";
import {Navigate, useLocation} from "react-router-dom";

function RequireAuth({children}) {
    const auth = useAuth();
    const requestedUrl = useLocation();
    if (!auth.user)
        return <Navigate to="/login" state={{from: requestedUrl}} replace></Navigate>
    return children;
}

export default RequireAuth;