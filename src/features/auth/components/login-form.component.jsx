import useAuth from "../hooks/auth.hook";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

function LoginForm() {
    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [loginError, setLoginError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        auth.login(formData, () => navigate(from, { replace: true }), () => setLoginError(true));
    }

    return auth.user ? (<Navigate to={from} />) : (
        <div className="login-form-container">
            <div className="notice">
                {(from !== "/") && (from !== "/login") && <p className="message">You must log in first!</p>}
                {loginError && <p className="message error">The username/password combination is incorrect!</p> }
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" required/>
                </label>
                <label>
                    Password: <input name="password" type="password" required/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;