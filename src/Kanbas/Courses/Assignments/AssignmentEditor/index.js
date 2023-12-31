import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import * as client from "../client";

function AssignmentEditor() {
    const navigate = useNavigate();
    const { courseId, assignmentId } = useParams();
    const dispatch = useDispatch();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);

    const [assignment, setAssignment] = useState({
        _id: null,
        title: '',
        weekinfo: '',
        due: '',
        available: '',
        until: '',
    });

    useEffect(() => {
        if (assignmentId === 'new') {
            setAssignment({
                _id: null,
                title: '',
                weekinfo: '',
                due: '',
                available: '',
                until: '',
            });
        } else {
            const existingAssignment = assignments.find(asgn => asgn._id === assignmentId);
            if (existingAssignment) {
                setAssignment(existingAssignment);
            } else {
                // impossible
            }
        }
    }, [assignmentId, assignments]);


    const [isNewAssignment, setIsNewAssignment] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('id') === 'new';
    });

    const handleSave = async () => {
        try {
            if (assignmentId === 'new') {
                const newAssignment = { ...assignment, course: courseId };
                const response = await client.createAssignment(courseId, newAssignment);
                dispatch(addAssignment(response));
                navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            } else {
                const updatedAssignment = { ...assignment, course: courseId };
                const response = await client.updateAssignment(updatedAssignment);
                dispatch(updateAssignment(response)); 
                navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            }
        } catch (error) {
            console.error('Error saving assignment:', error);
        }
    };
    
    const handleDueChange = (e) => {
        setAssignment({ ...assignment, due: e.target.value });
    };

    const handleAvailableChange = (e) => {
        setAssignment({ ...assignment, available: e.target.value });
    };

    const handleUntilChange = (e) => {
        setAssignment({ ...assignment, until: e.target.value });
    };

    const handleTitleChange = (e) => {
        setAssignment({ ...assignment, title: e.target.value });
    };

    const handleWeekInfoChange = (e) => {
        setAssignment({ ...assignment, weekinfo: e.target.value });
    };
    return (
        <div className="container">

            <div className="wd-mod-buttons d-flex justify-content-end me-4 mt-2">
                <div className="me-3 mt-1 text-success">
                    <i className="fa fa-check-circle" aria-hidden="true"></i> Published
                </div>
                <button type="button" className="btn btn-outline-dark btn-light">
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </button>
            </div>
            <hr className="me-4" />
            <div className="ms-2 me-2 mb-2 mt-2 pe-2">
                <label htmlFor="assignname" className="form-label">Assignment Name</label>
                <input
                    className="form-control pb-2 pt-2"
                    id="assignname"
                    value={isNewAssignment ? '' : assignment.title}
                    onChange={handleTitleChange}
                />
                <textarea
                    className="form-control mt-4 pb-2 pt-2"
                    id="assigndes"
                    rows="4"
                    value={isNewAssignment ? '' : assignment.weekinfo}
                    onChange={handleWeekInfoChange}
                >
                </textarea>
            </div>

            <div className="container">
                <div className="d-flex justify-content-left">
                    <div className="w-75">

                        <div className="mt-3 row">
                            <label for="points" className="col-sm-4 col-form-label text-end">Points</label>
                            <div className="col-sm-8">
                                <input type="number" className="form-control" id="points" value="100" min="0" />
                            </div>
                        </div>

                        <div className="mt-4 row">
                            <label for="assignmentgrp" className="col-sm-4 col-form-label text-end">Assignment Group</label>
                            <div className="col-sm-8">
                                <button className="btn btn-light btn-outline-secondary dropdown-toggle w-100 text-start" type="button" id="assignmentgrp" data-bs-toggle="dropdown">
                                    ASSIGNMENTS
                                </button>
                                <ul className="dropdown-menu w-40" aria-labelledby="assignmentgrp">
                                    <li><a className="dropdown-item" href="#">ASSIGNMENTS</a></li>
                                    <li><a className="dropdown-item" href="#">QUIZZES</a></li>
                                    <li><a className="dropdown-item" href="#">EXAMS</a></li>
                                    <li><a className="dropdown-item" href="#">PROJECT</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 row">
                            <label for="assignmentgrp" className="col-sm-4 col-form-label text-end">Display Grade as</label>
                            <div className="col-sm-8">
                                <button className="btn btn-light btn-outline-secondary dropdown-toggle w-100 text-start" type="button" id="assignmentgrp" data-bs-toggle="dropdown">
                                    Percentage
                                </button>
                                <ul className="dropdown-menu w-40" aria-labelledby="assignmentgrp">
                                    <li><a className="dropdown-item" href="#">Percentage</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 mb-3 row">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-8">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="doNotShow" />
                                    <label className="form-check-label" for="doNotShow">
                                        Do not show this assignment towards the final grade
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="mt-4 row">
                            <label className="col-sm-4 col-form-label text-end">Submission Type</label>
                            <div className="col-sm-8 border p-3">
                                <div className="mb-3">
                                    <button className="btn btn-light btn-outline-secondary dropdown-toggle w-50 text-start" type="button" id="submissionType" data-bs-toggle="dropdown">
                                        Online
                                    </button>
                                    <ul className="dropdown-menu w-40">
                                        <li><a className="dropdown-item" href="#">Online</a></li>
                                    </ul>
                                </div>
                                <div className="mb-2 fw-bold">Online Entry Options</div>
                                <div className="form-check mt-2">
                                    <label className="form-check-label w-100">
                                        <input type="checkbox" className="form-check-input" checked /> Text Entry
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <label className="form-check-label w-100">
                                        <input type="checkbox" className="form-check-input" /> Website URL
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <label className="form-check-label w-100">
                                        <input type="checkbox" className="form-check-input" /> Media Recordings
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <label className="form-check-label w-100">
                                        <input type="checkbox" className="form-check-input" checked /> File Uploads
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <label className="form-check-label w-100">
                                        <input type="checkbox" className="form-check-input" /> Student Annotation
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="mt-4 row">
                                <label className="col-sm-4 col-form-label text-end">Assign</label>
                                <div className="col-sm-8 border p-3">
                                    <div className="mb-3">
                                        <label for="AssignTo" className="fw-bold col-form-label w-50 text-start">Assign to</label>
                                        <input className="form-control pt-2 pb-2" id="AssignTo" value="Everyone" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="due" className="fw-bold col-form-label w-50 text-start">Due</label>
                                        <input type="date" className="form-control pt-2 pb-2" id="due" value={assignment.due} onChange={handleDueChange} />
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="Available" className="fw-bold col-form-label text-start">Available from</label>
                                            <input type="date" className="form-control pt-2 pb-2" id="Available" value={assignment.available} onChange={handleAvailableChange} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="until" className="fw-bold col-form-label text-start">Until</label>
                                            <input type="date" className="form-control pt-2 pb-2" id="until" value={assignment.until} onChange={handleUntilChange} />
                                        </div>
                                    </div>

                                    <button type="button" className="btn btn-light btn-outline-secondary w-100 mt-1">+ Add</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <hr className="me-4" />
            <form>
                <div className="d-flex justify-content-between align-items-center me-4 mb-2">
                    <label className="d-flex align-items-center">
                        <input type="checkbox" className="me-2" />
                        Notify users that this content has changed
                    </label>

                    <div>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary btn-outline-dark btn-lg btn-light me-2">
                            Cancel
                        </Link>
                        <button type="button" onClick={handleSave} className="btn btn-primary btn-lg btn-danger">
                            Save
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default AssignmentEditor;
