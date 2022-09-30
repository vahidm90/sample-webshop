import useAuth from "../../auth/hooks/auth.hook";
import {useLocation, useNavigate} from "react-router-dom";

function UserThumbnail() {
    const auth = useAuth();
    const navigate = useNavigate();
    const currentUrl = useLocation();

    const user = auth.user;

    function handleLoginButtonClick(e) {
        e.preventDefault();
        navigate("/login", {state: {from: currentUrl}});
    }

    function handleLogoutButtonClick(e) {
        e.preventDefault();
        auth.logout();
    }

    if (!user)
        return (
            <>
                <span>Guest</span>
                {(currentUrl.pathname !== "/login") && <button onClick={handleLoginButtonClick}>Login</button>}
            </>
        );


    return (
        <>
            Welcome {user.name}!{" "}
            <button onClick={handleLogoutButtonClick}>Quit</button>
        </>
    );
}

export default UserThumbnail;