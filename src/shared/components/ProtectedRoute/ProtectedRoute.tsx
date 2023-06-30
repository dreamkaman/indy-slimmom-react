// import { useSelector } from "react-redux";

// import LoginPage from 'pages/LoginPage';

// import { isAuthSelector } from "redux/selectors/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, criteria, path }) => {

    // const isAuth = useSelector(isAuthSelector);

    if (criteria) {
        return children;
    }
    return <Navigate to={path} replace={true} />
}

export default ProtectedRoute;