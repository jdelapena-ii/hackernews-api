import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopStoriesListing from './pages/TopStoriesListing';
import NewestListing from './pages/NewestListing';
import BestListing from './pages/BestListing';
import AskListing from './pages/AskListing';
import ShowListing from './pages/ShowListing';
import JobsListing from './pages/JobsListing';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TopStoriesListing />} />
          <Route path="/newest" element={<NewestListing />} />
          <Route path="/best" element={<BestListing />} />
          <Route path="/ask" element={<AskListing />} />
          <Route path="/show" element={<ShowListing />} />
          <Route path="/jobs" element={<JobsListing />} />
          <Route path="/submit" element={<Register />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
