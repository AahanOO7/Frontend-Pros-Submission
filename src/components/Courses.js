import React from 'react';
import courses from '../data/courses';
import { Link } from 'react-router-dom';
import { FaUsers, FaMoneyBillWaveAlt, FaTag, FaStar } from 'react-icons/fa';

function Courses() {
    return (
        <section className="courses-section">
            <div className="courses-section-title">
                Courses
                <div className="title-underline"></div>
            </div>
            <div className="courses-grid">
                {courses.map(
                    (
                        {
                            Name,
                            Price,
                            Enrollment,
                            Image,
                            Discount,
                            Category,
                            Rating,
                        },
                        index
                    ) => (
                        <Link
                            className="course"
                            to={`/course/${index}`}
                            key={index}
                        >
                            <div className="course-container">
                                <img
                                    className="course-image"
                                    src={Image}
                                    alt="Course"
                                />
                                <div className="course-name">
                                    {Name.length > 30
                                        ? `${Name.substring(0, 30)}...`
                                        : Name}
                                </div>
                                <div className="course-detail">
                                    <div
                                        className="course-detail-icon"
                                        style={{ color: 'orangered' }}
                                    >
                                        <FaTag />
                                    </div>
                                    <div className="course-detail-text">
                                        {Category}
                                    </div>
                                </div>
                                <div className="course-details">
                                    <div className="course-detail">
                                        <div
                                            className="course-detail-icon"
                                            style={{ color: '#42d342' }}
                                        >
                                            <FaMoneyBillWaveAlt />
                                        </div>
                                        <div className="course-detail-text">
                                            ₹{Price}{' '}
                                            <strike>
                                                ₹
                                                {Discount.substring(
                                                    Discount.length - 5,
                                                    Discount.length - 1
                                                )}
                                            </strike>
                                            <div className="course-discount">
                                                {Discount.substring(0, 3)} off!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-detail">
                                        <div
                                            className="course-detail-icon"
                                            style={{ color: 'orange' }}
                                        >
                                            <FaUsers />
                                        </div>
                                        <div className="course-detail-text">
                                            {Enrollment}
                                        </div>
                                    </div>
                                    <div className="course-detail">
                                        <div
                                            className="course-detail-icon"
                                            style={{ color: 'yellow' }}
                                        >
                                            <FaStar />
                                        </div>
                                        <div className="course-detail-text">
                                            {Rating}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </section>
    );
}

export default Courses;
