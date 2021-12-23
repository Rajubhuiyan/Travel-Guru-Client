import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Search from './Pages/Search/Search/Search';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/booking/:bookingId" element={<Booking/>}/>
          <Route path="/search/:searchId" element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
