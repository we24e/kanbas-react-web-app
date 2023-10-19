import React from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import './index.css'; 

function CourseNavigation({courseId}) {
    const links = [
        "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", 
        "Quizzes", "Grades", "People", "Panopto Video", "Discussions", 
        "Announcements", "Pages", "Files", "Rubrics", "Outcomes", 
        "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"
    ];
    
    const { pathname } = useLocation();
    return (
        <div className="wd-kanbas-cs-side wd-anav d-none d-md-block">
            {links.map((link, index) => (
                <div 
                    key={index} 
                    className={pathname.includes(link.replace(/ /g, "-")) ? 'wd-selected' : ''}
                    style={{padding: '5px 0'}} 
                >
                    <Link
                        to={`/Kanbas/Courses/${courseId}/${link.replace(/ /g, "-")}`}
                        className="wd-kanbas-cs-side-link" 
                    >
                        {link}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CourseNavigation;
