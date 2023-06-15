import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Header from 'components/Header';

import AppRouts from 'routes/AppRouts';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Header />
      <AppRouts />
    </LocalizationProvider>
  );
}

export default App;
