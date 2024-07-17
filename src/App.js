import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TourDetailsContainer from './containers/TourDetailsContainer';

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
