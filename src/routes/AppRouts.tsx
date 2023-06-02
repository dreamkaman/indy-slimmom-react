import { Routes, Route } from 'react-router-dom';

import HealthCalculatorPage from 'pages/HealthCalculatorPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterUserForm from 'components/RegisterUserForm/RegisterUserForm';
import DairyPage from 'pages/DairyPage/DairyPage';
import HomePage from 'pages/HomePage';

const AppRouts = () => {
    return <Routes>
        <Route path={'/'} element={<HomePage />}></Route>
        <Route path={'/login'} element={< LoginPage />}></Route>
        <Route path={'/registration'} element={<RegisterUserForm />}></Route>
        <Route path={'/calculator'} element={<HealthCalculatorPage />}></Route>
        <Route path={'/dairy'} element={<DairyPage />}></Route>
        <Route path={'*'} element={<h2 style={{ color: 'black', padding: '300px', textAlign: 'center' }}>Page not found!</h2>
        }></Route >
    </Routes >
}

export default AppRouts;