import { ThemeProvider } from '@mui/material/styles'
import { HomePage, PageNotFound, UpcomingTripsPage } from './pages/utils'
import { Navbar } from './components/utils'
import TourDetailsContainer from './containers/TourDetailsContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './assets/theme'
import './App.css'
import { useLoading } from './components/Loader/LoaderContext'
import LoaderComponent from './components/Loader/Loader'

function App() {
    const { loading } = useLoading();

    return (
        <ThemeProvider theme={theme}>
            {loading && <LoaderComponent />}
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
                            path="/tour/:tripId"
                            element={<TourDetailsContainer />}
                        />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App
