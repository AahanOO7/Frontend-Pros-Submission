import React from 'react';
import courses from '../data/courses';

function Courses() {
    return (
        <section className="courses-section">
            <div className="courses-section-title">Courses</div>
            <div className="courses-grid">
                {courses.map(({ Name }) => (
                    <article className="course">{Name}</article>
                ))}
            </div>
        </section>
    );
}

export default Courses;
