import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';
import { TfiWrite } from 'react-icons/tfi';
import { FaEllipsisV } from 'react-icons/fa';

function Dashboard() {
    const courses = db.courses; 

    return (
        <>
            <h1>Dashboard <hr/></h1>
            <div className="container wd-dash-contain">
                <h2>Published Courses ({courses.length}) <hr/></h2>
                <div className="row flex-row d-flex flex-wrap g-4 wd-dash">
                    {courses.map((course, index) => (
                        <CourseCard key={course._id} course={course} colorClass={`card-color-top${index + 1}`} />
                    ))}
                </div>
            </div>
        </>
    );
}

function CourseCard({ course, colorClass }) {
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
                    <Card.Text>
                        <Link to={`/Kanbas/Courses/${course._id}`} className="wd-h5-link">
                            {course.number}
                        </Link>
                        <br/>
                        <TfiWrite className="icon-pencil" /> 
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Dashboard;
