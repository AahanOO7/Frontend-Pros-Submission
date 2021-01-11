import React, { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import courses from '../data/courses';

function Course({ match }) {
    const course = courses[parseInt(match.params.id)];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, []);
    return (
        <section className="course-detail-section">
            <Link to="/courses" className="back-to-courses-link">
                <FaArrowLeft />
            </Link>
            <div className="course-detail-container">
                <div className="course-detail-grid">
                    <img
                        src={course.Image}
                        alt="Course"
                        className="course-detail-image"
                    />
                    <div className="course-details">
                        <div className="course-detail-name">{course.Name}</div>
                        <div className="course-detail-section-detail-grid">
                            <div className="course-detail-section-detail-name">
                                Price
                            </div>
                            <div className="course-detail-section-detail-value">
                                ₹{course.Price}{' '}
                                <strike>
                                    ₹
                                    {course.Discount.substring(
                                        course.Discount.length - 5,
                                        course.Discount.length - 1
                                    )}
                                </strike>
                            </div>
                        </div>
                        <div className="course-detail-section-detail-grid">
                            <div className="course-detail-section-detail-name">
                                Developer Name
                            </div>
                            <div className="course-detail-section-detail-value">
                                {course['Course provider']}
                            </div>
                        </div>
                        <div className="course-detail-section-detail-grid">
                            <div className="course-detail-section-detail-name">
                                Category
                            </div>
                            <div className="course-detail-section-detail-value">
                                {course.Category}
                            </div>
                        </div>
                        <div className="course-detail-section-detail-grid">
                            <div className="course-detail-section-detail-name">
                                Rating
                            </div>
                            <div className="course-detail-section-detail-value">
                                {course.Rating}
                            </div>
                        </div>
                        <div className="course-detail-section-detail-grid">
                            <div className="course-detail-section-detail-name">
                                Enrollment
                            </div>
                            <div className="course-detail-section-detail-value">
                                {course.Enrollment}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-detail-description">
                    {course.Description}
                </div>
            </div>
        </section>
    );
}

export default Course;
