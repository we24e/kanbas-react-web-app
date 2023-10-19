import React from 'react';
import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css"
import {PiRadio} from "react-icons/pi";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
            <div className="container-fluid">

                <div className="wd-mod-buttons mt-0 p-2 ps-0 me-4">
                    <span className='text-danger mt-5 pt-5 wd-gradebook'>GradeBook</span>
                    <PiRadio className='text-danger ms-2 mb-1 wd-gradebook' />
                    <button type="button" class="btn btn-outline-dark btn-light float-end"><i class="fa fa-cog" aria-hidden="true"></i></button>
                    <button type="button" class="btn btn-outline-dark btn-light me-3 float-end"><i class="fa fa-sign-out" aria-hidden="true"></i> Export ▼</button>
                    <button type="button" class="btn btn-outline-dark btn-light me-3 float-end"><i class="fa fa-sign-in" aria-hidden="true"></i>  Import</button>
                    <br />
                </div>

                <div className="row fw-bold fs-5 mt-3 mb-2 me-4">
                    <div className="col text-start">Student Names</div>
                    <div className="col text-start">Assignment Names</div>
                </div>

                <div className="row me-4">
                    <div className="col">
                        <div className="input-group">
                            <span className="input-group-text bg-white">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                            <select className="form-select form-control-lg wd-white-background">
                                <option selected>Search Students</option>
                                {enrollments.map((enrollment) => {
                                    const user = db.users.find(user => user._id === enrollment.user);
                                    return (
                                        <option key={user._id}>{user.firstName} {user.lastName}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <span className="input-group-text bg-white">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                            <select className="form-select form-control-lg wd-white-background">
                                <option selected>Search Assignments</option>
                                {assignments.map((assignment) => (
                                    <option key={assignment._id}>{assignment.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row mt-3 mb-3">
                    <div className="col">
                        <button type="button" className="btn btn-light btn-outline-secondary btn-block p-2">
                            <i className="fa fa-filter me-1 bg" aria-hidden="true"></i>
                            Apply Filters
                        </button>
                    </div>
                </div>


            <div className="table-responsive me-4">
                <table className="table table-striped table-bordered wd-grade">
                    <thead>
                        <tr>
                            <td className="fw-bold align-start wd-grade-left wd-vertical-algin ps-3" style={{ width: "20%" }}>Student Name</td>
                            {assignments.map(assignment => (
                                <td className='wd-headers-align'>{assignment.title}<br />Out of 100</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="align-middle text-center">
                        {enrollments.map(enrollment => {
                            const user = db.users.find(user => user._id === enrollment.user);
                            return (
                                <tr key={user._id}>
                                    <td className="wd-grade-left ps-3">
                                        <a href="#" className="text-danger text-decoration-none">
                                            {user.firstName} {user.lastName}
                                        </a>
                                    </td>
                                    {assignments.map((assignment, index) => {
                                        const grade = db.grades.find(
                                            grade => grade.student === enrollment.user && grade.assignment === assignment._id
                                        );
                                        if (index == 0) {
                                            return (
                                                <td>
                                                    <input 
                                                        className="form-control wd-ph-center" 
                                                        type="number" 
                                                        placeholder={grade?.grade || ""}
                                                    />
                                                </td>
                                            );
                                        } else {
                                            return (<td>{grade?.grade || 
                                                <input 
                                                    className="form-control wd-ph-center" 
                                                    type="number" 
                                                    placeholder={grade?.grade || ""}
                                                />}
                                            </td>);
                                        }
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;
