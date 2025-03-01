import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import MyBooks from './pages/MyBooks';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    const { user } = useSelector(state => state.auth);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/MyBooks" element={user ? <MyBooks /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
