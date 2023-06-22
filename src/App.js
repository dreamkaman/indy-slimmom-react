import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/Header';

import AppRouts from 'routes/AppRouts';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header />
      <AppRouts />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        // transition="zoom"
      />
    </LocalizationProvider>
  );
}

export default App;
