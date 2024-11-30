// import './App.css';
import Events from './pages/events';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventDetails from './pages/eventDetails';
import { useNavigate } from 'react-router-dom'


function App() {
  let navigate = useNavigate()
  return (
    <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Events />} />

            <Route
              path="/events/:eventId"
              element={<EventDetails />} />
        </Routes>
    </div>
  );
}

export default App;
