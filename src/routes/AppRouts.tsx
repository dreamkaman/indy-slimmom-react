import { Routes, Route } from 'react-router-dom';

import DairyCalculatorPage from 'pages/DairyCalculatorPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import HomePage from 'pages/HomePage';


const AppRouts = () => {
    return <Routes>
        <Route path={'/'} element={<HomePage />}></Route>
        <Route path={'/login'} element={< LoginPage />}></Route>
        <Route path={'/register'} element={<RegistrationPage />}></Route>
        <Route path={'/calculator'} element={<DairyCalculatorPage />}></Route>
        <Route path={'/dairy'} element={<DairyCalculatorPage />}></Route>
        <Route path={'*'} element={<h2 style={{ color: 'black', padding: '300px', textAlign: 'center' }}>Page not found!</h2>
        }></Route >
    </Routes >
}

export default AppRouts;