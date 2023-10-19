import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";

function Assignments() {
    const { courseId } = useParams();
    let realID = courseId || 'RS102';
    if (!realID.includes("RS")) {
        realID = 'RS102';
    }
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === realID
    );

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
                        <button type="button" className="btn btn-danger me-1">+ Assignment</button>
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

                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${realID}/Assignments/${assignment._id}`}
                        className="list-group-item list-group-item-action ps-2 pe-2"
                    >
                        <div className="d-flex align-items-center">
                            <PiDotsSixVerticalBold className="me-2 mb-1 mt-1 fw-bold wd-pidot" />
                            <MdEditDocument className="me-2 wd-edit-icon" />
                            <div className="ms-2 mt-1 mb-1">
                                <div className="fw-bold">{assignment.title}</div>
                                <div className="wd-cs-smalltxt">{assignment.weekinfo}</div>
                                <div className="wd-cs-smalltxt"><b>Due</b> {assignment.due} | 100 pts</div>
                            </div>
                            <div className="ms-auto">
                                <i className="fa fa-check-circle ms-2" aria-hidden="true"></i>
                                <i className="fa fa-ellipsis-v ms-4 me-2" aria-hidden="true"></i>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Assignments;
