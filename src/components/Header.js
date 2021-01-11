import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/header_logo.jpeg';

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="CoursePoint" />
            </Link>
            <nav>
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/courses" className="nav-link">
                    Courses
                </Link>
            </nav>
        </header>
    );
}

export default Header;
