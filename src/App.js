import { ThemeProvider } from '@mui/material/styles'
import { HomePage, UpcomingTripsPage } from './pages/utils'
import { Navbar } from './components/utils'
import TourDetailsContainer from './containers/TourDetailsContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './assets/theme'
import './App.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/upcoming-trips"
                            element={<UpcomingTripsPage />}
                        />
                        <Route
                            path="/tour"
                            element={<TourDetailsContainer />}
                        />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App
