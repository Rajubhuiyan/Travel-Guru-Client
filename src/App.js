import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Pages/Booking/Booking/Booking';
import AuthProvider from './Pages/Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Search from './Pages/Search/Search/Search';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/booking/:bookingId" element={<Booking/>}/>
          <Route path="/search/:searchId" element={<PrivateRoute><Search/></PrivateRoute>}/>
          <Route path="/login/" element={<Login/>}/>
          <Route path="/register/" element={<Register/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
