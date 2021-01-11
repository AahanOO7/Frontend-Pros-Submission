import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <section className="landing-section">
            <div className="landing-section-hero">
                <h1>Welcome to CoursePoint!</h1>
                <h3>Find the best courses here!</h3>
            </div>
            <Link className="courses-link-button" to="/courses">
                See Courses
            </Link>
        </section>
    );
}

export default Landing;
