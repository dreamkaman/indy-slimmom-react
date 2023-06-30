import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DairyCalculatorPage from 'pages/DairyCalculatorPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import HomePage from 'pages/HomePage';
import ProtectedRoute from 'shared/components/ProtectedRoute';

import { isAuthSelector } from 'redux/selectors/auth';

const AppRouts = () => {
    const isAuth = useSelector(isAuthSelector);

    return <Routes>
        <Route path={'/'} element={<HomePage />}></Route>
        <Route path={'/login'} element={
            <ProtectedRoute criteria={!isAuth} path='/calculator'>
                < LoginPage />
            </ProtectedRoute>}>
        </Route>
        <Route path={'/register'} element={
            <ProtectedRoute criteria={!isAuth} path='/calculator'>
                <RegistrationPage />
            </ProtectedRoute>}>
        </Route>
        <Route path={'/calculator'} element={
            <ProtectedRoute criteria={isAuth} path='/'>
                <DairyCalculatorPage />
            </ProtectedRoute>}>
        </Route>
        <Route path={'/dairy'} element={
            <ProtectedRoute criteria={isAuth} path='/'>
                <DairyCalculatorPage />
            </ProtectedRoute>}>
        </Route>
        <Route path={'*'} element={<h2 style={{ color: 'black', padding: '300px', textAlign: 'center' }}>Page not found!</h2>
        }></Route >
    </Routes >
}

export default AppRouts;