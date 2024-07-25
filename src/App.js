import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import { HomePage } from './pages/utils'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TourDetailsContainer from './containers/TourDetailsContainer';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1d4d54',
        },
        secondary: {
            main: '#3B90A0',
        },
        background: {
            main: '#F8F4F1',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h2: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h3: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h4: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h5: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
        h6: {
            fontFamily: 'Satisfy, cursive',
            wordSpacing: '0.2em',
        },
    },
})

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* Define routes here */}
            <Route
              path="/tour"
              element={<TourDetailsContainer />} // Render the container for this route
            />
            {/* You can add more routes here */}
            <Route
              path="/"
              exact
              render={() => <div>Home Page</div>} // Example of another route
            />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App
