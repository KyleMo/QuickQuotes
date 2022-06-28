import Homepage from './Pages/Homepage/Homepage.js'
import LogInPage from './Pages/LogInPage/LogInPage.js'
import SignUpPage from './Pages/SignUpPage/SignUpPage.js'
import Dashboard from './Pages/DashboardPage/DashboardPage.js'
import MetricsPage from './Pages/MetricsPage/MetricsPage.js'
import QuotesPage from './Pages/QuotesPage/QuotesPage.js'
import CreateQuotePage from './Pages/CreateQuotePage/CreateQuotePage.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import { AppProvider } from './ContextProvider'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
  palette: {
    primary: {
      main: "#3993DD",
    },
    secondary: {
      main: "#fda700",
    },
    background: {
      default: "#FFFFFA",
      paper: "#FFFFFA"
    },
    text: {
      default: "#2F2F2F"
    },
    typography: {
      fontFamily: "'Roboto','Helvetica','Arial', sans-serif"
    }
  },
})

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/login' element={<LogInPage />}></Route>
              <Route path='/sign-up' element={<SignUpPage />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/metrics' element={<MetricsPage />}></Route>
              <Route path='/quotes' element={<QuotesPage />}></Route>
              <Route path='/create-quote' element={<CreateQuotePage />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
