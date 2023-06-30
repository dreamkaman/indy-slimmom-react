import { FC, ReactElement } from 'react';
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
    children: ReactElement,
    criteria: string | boolean,
    path: string
}
const ProtectedRoute: FC<IProtectedRouteProps> = ({ children, criteria, path }) => {

    if (criteria) {
        return children;
    }
    return <Navigate to={path} replace={true} />
}

export default ProtectedRoute;