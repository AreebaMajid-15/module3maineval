import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/authSlice';

const Navbar = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <nav>
            <h1>My Library</h1>
            <Link to="/">Home</Link>
            {user && <Link to="/my-books">My Books</Link>}
            {!user ? (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )}
            {user && <p>Welcome, {user.email}</p>}
        </nav>
    );
};

export default Navbar;
