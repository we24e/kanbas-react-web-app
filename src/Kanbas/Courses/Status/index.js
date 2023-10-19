import React from 'react';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { GrAnnounce } from 'react-icons/gr';
import { ImTarget } from 'react-icons/im';
import { IoNotificationsOutline } from 'react-icons/io5';
import { TbDatabaseImport } from 'react-icons/tb';
import { TbFileImport } from 'react-icons/tb';

function Status() {
    const icons = [
        <TbFileImport className="me-1" />,
        <TbDatabaseImport className="me-1" />,
        <ImTarget className="me-1" />,
        <BiSolidBarChartAlt2 className="me-1" />,
        <GrAnnounce className="me-1" />,
        <BiSolidBarChartAlt2 className="me-1" />,
        <IoNotificationsOutline className="me-1" />
    ];
    
    const labels = ["Import Existing Content", "Import From Commons", "Choose Home Page", "View Course Stream", "New Announcement", "New Analytics", "View Course Notifications"];
    return (
        <div>
            <div className="mb-3">
                <h5>Course Status</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-6 wd-no-padding-lr">
                            <button type="button" className="btn btn-outline-dark btn-light w-100">
                                <i className="fa fa-ban" aria-hidden="true"></i>
                                Unpublish
                            </button>
                        </div>
                        <div className="col-6 wd-no-padding-lr">
                            <button disabled type="button" className="btn btn-success w-100">
                                <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                                Published
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled mt-4 wd-hyperlink">
                    {icons.map((icon, index) => (
                        <li key={index}>
                            <button type="button" className="btn btn-outline-dark btn-light ps-2 pe-2 pt-2 pb-2 mb-2 w-100">
                                {icon}
                                {labels[index]}
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
            
            <div className="mb-4">
                <h6 className="fw-bold">To Do</h6>
                <hr/>
                <p className="ps-2 wd-hyperlink"> 
                    <a href="#">
                        <span>Grade A1 - ENV + HTML</span>
                    </a>
                    <a href="#" className="wd-no-underline float-end">X</a>
                </p>
                <p className="ps-2 wd-cs-smalltxt"> 100 points • Sep18 at 11:59pm</p>
            </div>

            <div className="wd-hyperlink">
                <h6 className="fw-bold">Coming Up</h6>

                <hr/>
                <ul className="list-unstyled">
                    <li>
                        <i className="fa fa-calendar me-2 float-start ms-1 mt-1" aria-hidden="true"></i>  
                        <a className="ps-2" href="#">
                            <span>Lecture</span>
                        </a>
                        <p className="ps-4 ms-2 wd-cs-smalltxt">CS4550.12631.202410 <br/>Sep 11 at 11:45am</p>
                    </li>
                    <li>
                        <i className="fa fa-calendar me-2 float-start ms-1 mt-1" aria-hidden="true"></i> 
                        <a className="ps-2" href="#">
                            <span>CS5610 06 SP23 Lecture</span>
                        </a>
                        <p className="ps-4 ms-2 wd-cs-smalltxt">CS4550.12631.202410 <br/>Sep 11 at 11:45am</p>
                    </li>
                    <li>
                        <a className="ps-1" href="#">
                            <span>12 more in the next week...</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Status;
