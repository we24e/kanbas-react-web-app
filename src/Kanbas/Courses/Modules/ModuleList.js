import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
    const { courseId } = useParams();
    let realID = courseId || 'RS102';
    if (!realID.includes("RS")) {
        realID = 'RS102';
    }
    const modules = db.modules;

    return (
        <div className="list-group wd-modules ms-2 mt-2 me-4 mb-2">
            {
                modules
                    .filter((module) => module.course === realID)
                    .map((module, index) => (
                        <div key={index} className="list-group-item list-group-item-secondary ps-2 pt-3 pb-3 mt-5">
                            <PiDotsSixVerticalBold className="me-1 mb-1 fw-bold" />
                            <i className="fa fa-ellipsis-v float-end ms-4" aria-hidden="true"></i>
                            <i className="fa fa-plus float-end ms-4" aria-hidden="true"></i>
                            <i className="fa fa-check-circle float-end ms-2" aria-hidden="true"></i>
                            <span className="fw-bold">{module.name} - </span>
                            <span>{module.description}</span>
                        </div>
                    ))
            }
        </div>
    );
}

export default ModuleList;
