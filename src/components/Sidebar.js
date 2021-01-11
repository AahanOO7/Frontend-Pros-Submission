import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <aside className={isSidebarOpen ? 'open' : ''}>
            <div
                className="close-sidebar-button"
                onClick={() => setIsSidebarOpen(false)}
            >
                &times;
            </div>
            <nav>
                <Link
                    to="/"
                    className="nav-link"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to="/courses"
                    className="nav-link"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    Courses
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;
