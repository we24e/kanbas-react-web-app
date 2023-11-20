import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./index.css";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./assignmentsReducer";
import * as client from "./client";

function Assignments() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    

    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
              .then(assignments => dispatch(setAssignments(assignments)))
              .catch(error => console.error("Error fetching assignments:", error));
    }, [courseId, dispatch]);

    const handleDeleteAssignment = async (assignmentId) => {
        if (window.confirm("Are you sure you want to remove this assignment?")) {
            try {
                await client.deleteAssignment(assignmentId);
                dispatch(deleteAssignment(assignmentId));
            } catch (error) {
                console.error("Error deleting assignment:", error);
            }
        }
    };

    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
    };

    return (
        <div className="me-4">
            <script src="../../../bootstrap/js/bootstrap.bundle.min.js"></script>
            <div className="container-fluid mt-2 ms-1 me-4">
                <div className="d-flex justify-content-between me-3">
                    <form className="w-40">
                        <input type="text" className="form-control" placeholder="Search for Assignment" />
                    </form>
                    <div className="wd-mod-buttons">
                        <button type="button" className="btn btn-outline-dark btn-light me-1">+ Group</button>
                        <button type="button" className="btn btn-danger me-1" onClick={handleAddAssignment}>+ Assignment</button>
                        <button type="button" className="btn btn-outline-dark btn-light">
                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="mt-3 mb-4 me-3" />
            <div className="list-group wd-modules ms-2 mt-2 me-3 mb-2 wd-green-left-border">
                <div className="list-group-item list-group-item-secondary fw-bold ps-1 pt-3 pb-2">
                    <i className="fa fa-ellipsis-v float-end ms-4 mt-2" aria-hidden="true"></i>
                    <i className="fa fa-plus float-end ms-3 mt-2" aria-hidden="true"></i>
                    <div className="wd-ellipse float-end ms-2">
                        40% of Total
                    </div>
                    <PiDotsSixVerticalBold className="me-2 mb-1 fw-bold wd-pidot" />
                    ASSIGNMENTS
                </div>

                {assignments.map((assignment) => (
                    <div key={assignment._id} className="list-group-item list-group-item-action ps-2 pe-2 d-flex justify-content-between align-items-center">
                        <Link
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="d-flex align-items-center text-decoration-none"
                            style={{ flexGrow: 1 }}
                        >
                            <PiDotsSixVerticalBold className="me-2 mb-1 mt-1 fw-bold wd-pidot" />
                            <MdEditDocument className="me-2 wd-edit-icon" />
                            <div className="ms-2 mt-1 mb-1">
                                <div className="fw-bold text-dark">{assignment.title}</div>
                                <div className="wd-cs-smalltxt">{assignment.weekinfo}</div>
                                <div className="wd-cs-smalltxt"><b>Due</b> {assignment.due} | 100 pts</div>
                            </div>
                        </Link>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteAssignment(assignment._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Assignments;
