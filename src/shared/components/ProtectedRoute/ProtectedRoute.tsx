import { useSelector } from "react-redux";

// import LoginPage from 'pages/LoginPage';

import { isAuthSelector } from "redux/selectors/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const isAuth = useSelector(isAuthSelector);

    if (isAuth) {
        return children;
    }
    return <Navigate to="/login" replace={true} />
}

export default ProtectedRoute;