import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/header_logo.jpeg';

function Header({ setIsSidebarOpen }) {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="CoursePoint" />
            </Link>
            <div className="nav-open-button-container">
                <div
                    className="nav-open-button"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <div className="nav-open-button-line"></div>
                    <div className="nav-open-button-line"></div>
                    <div className="nav-open-button-line"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
