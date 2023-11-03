import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';
import { TfiWrite } from 'react-icons/tfi';
import { FaEllipsisV } from 'react-icons/fa';
import { useState } from 'react';

function Dashboard(
    { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {

    return (
        <>
            <h1>Dashboard <hr /></h1>
            <div className="container ms-2">
                <h4>Course Editor</h4>
                <div className="row mt-2">
                    <div className="col-md-6 mt-2">
                        <input
                            value={course.name}
                            className="form-control wd-new-course mb-2"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })}
                            placeholder="Course Name"
                        />
                    </div>
                    <div className="col-md-6 mt-2">
                        <input
                            value={course.number}
                            className="form-control wd-new-course mb-2"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })}
                            placeholder="Course Number"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-1">
                        <input
                            value={course.startDate}
                            className="form-control wd-new-course mb-2"
                            type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                        />
                    </div>
                    <div className="col-md-6 mt-1">
                        <input
                            value={course.endDate}
                            className="form-control wd-new-course mb-2"
                            type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <button className="btn btn-success me-2" onClick={addNewCourse}>
                        Add
                    </button>
                    <button className="btn btn-primary" onClick={updateCourse}>
                        Update
                    </button>
                </div>
            </div>

            <div className="container wd-dash-contain">
                <h2>Published Courses ({courses.length}) <hr /></h2>
                <div className="row flex-row d-flex flex-wrap g-4 wd-dash">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={course._id}
                            course={course}
                            colorClass={`card-color-top${index + 1}`}
                            deleteCourse={deleteCourse}
                            setCourse={setCourse} />
                    ))}
                </div>
            </div>
        </>
    );
}

function CourseCard({ course, colorClass, deleteCourse, setCourse }) {
    return (
        <div className="col">
            <Card className="h-100">
                <Card.Img variant="top" className={colorClass} />

                <FaEllipsisV className="ellipsis-icon" />
                <Card.Body>
                    <Card.Title>
                        <Link to={`/Kanbas/Courses/${course._id}`} className="wd-h5-link wd-h5-wrap">
                            {course.name}
                        </Link>
                    </Card.Title>
                    <Card.Text className='mb-0'>
                        <Link to={`/Kanbas/Courses/${course._id}`} className="wd-h5-link">
                            {course.number}
                        </Link>
                        <br />
                        <TfiWrite className="icon-pencil" />
                    </Card.Text>
                    <div className='mb-2'>{course.startDate} - {course.endDate}</div>
                    <div>
                        <button
                            className="btn btn-danger float-end"
                            onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }}>
                            Delete
                        </button>

                        <button
                            className="btn btn-warning me-2 float-end"
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}>
                            Edit
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}


export default Dashboard;
