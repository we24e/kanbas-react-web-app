import React from 'react';
import { Navigate, Route, Routes, useParams, useLocation } from 'react-router-dom';
import Header from './Header';
import CourseNavigation from "./CourseNavigation";
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/AssignmentEditor';
import Grades from './Grades';
import db from "../Database";

function Courses() {
    const { courseId } = useParams();
    let realID = courseId || 'RS102';
    if (!realID.includes("RS")) {
        realID = 'RS102';
    }

    const location = useLocation();
    let currentModule = location.pathname.split('/').pop().replace(/-/g, ' ');

    if (currentModule.startsWith('A1') || currentModule.startsWith('A2') || currentModule.startsWith('A3') || currentModule.startsWith('A4') || currentModule.startsWith('A5')) {
        
        const assignment = db.assignments.find(
            (assignment) => assignment._id === currentModule
        );
    
        currentModule = `Assignments.${assignment.title}`;
    }    

    return (
        <div>
            <Header courseId={realID} module={currentModule} />

            <div style={{ display: 'flex', flexDirection: 'row'}}> 
                <CourseNavigation courseId={realID} />

                <div className="wd-full-width">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom-Meetings" element={<h1>Zoom Meetings</h1>} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Panopto-Video" element={<h1>Panopto Video</h1>} />
                        <Route path="Discussions" element={<h1>Discussions</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Progress-Reports-(EAB-Navigate)" element={<h1>Progress Reports (EAB Navigate)</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;
