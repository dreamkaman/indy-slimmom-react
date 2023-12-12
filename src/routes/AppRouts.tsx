import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProtectedRoute from 'shared/components/ProtectedRoute';

import { isAuthSelector } from 'redux/selectors/user';

const DairyCalculatorPage = lazy(() => import('pages/DairyCalculatorPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const HomePage = lazy(() => import('pages/HomePage'));

const AppRouts = () => {
    const isAuth = useSelector(isAuthSelector);

    return <Suspense fallback={<p>Loading...</p>}>
        <Routes>
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
    </Suspense>
}

export default AppRouts;