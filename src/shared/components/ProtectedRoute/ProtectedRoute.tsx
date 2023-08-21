import { FC } from 'react';
import { Navigate } from "react-router-dom";
import { IProtectedRouteProps } from 'types';


const ProtectedRoute: FC<IProtectedRouteProps> = ({ children, criteria, path }) => {

    if (criteria) {
        return children;
    }
    return <Navigate to={path} replace={true} />
}

export default ProtectedRoute;