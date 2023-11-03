import React from 'react';
import { FaBars, FaChevronDown, FaTripadvisor } from 'react-icons/fa';
import './index.css';

function Header({ course, module }) {
    return (
        <div className="container-fluid wd-header mt-3 ms-4 me-4">
            <div className="row align-items-center">
                <div className="col-auto">
                    <FaBars className="wd-lhs-icon wd-red-text" />
                </div>
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb wd-breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <span className="wd-red-text wd-header-font">{course ? course.number : 'Course Not Found'}</span>
                            </li>
                            {module.startsWith("Assignments.") ? (
                                <>
                                    <li className="breadcrumb-item">
                                        <span className="wd-red-text wd-header-font">Assignments</span>
                                    </li>
                                    <li className="breadcrumb-item active wd-black-text wd-header-font" aria-current="page">
                                        {module.replace("Assignments.", "")}
                                    </li>
                                </>
                            ) : (
                                <li className="breadcrumb-item active wd-black-text wd-header-font" aria-current="page">
                                    {module}
                                </li>
                            )}
                        </ol>
                    </nav>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-outline-dark btn-light btn-sm">
                        <FaTripadvisor className="wd-student-view-icon" aria-hidden="true" />
                        <span className="wd-btn-text">Student View</span>
                    </button>
                    <a href="" className="d-sm-none wd-black-text">
                        <FaChevronDown className="wd-dropdown-icon" />
                    </a>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Header;
