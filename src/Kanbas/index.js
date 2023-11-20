import { Route, Routes, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses(prevCourses => [response.data, ...prevCourses]);
        setCourse({ name: "" });
    };

    const deleteCourse = async (courseId) => {
        try {
            await axios.delete(`${URL}/${courseId}`);
            setCourses(courses.filter((course) => course._id !== courseId));
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };


    const updateCourse = async () => {
        try {
            await axios.put(`${URL}/${course._id}`, course);
            setCourses(courses.map((c) => c._id === course._id ? course : c));
        } catch (error) {
            console.error("Error updating course:", error);
        }
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div className="wd-flex-grow">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<Account />} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} />
                        } />

                        <Route path="Courses" element={<Navigate to="/Kanbas/Dashboard" />} />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="Inbox" element={<h1>Inbox</h1>} />
                        <Route path="History" element={<h1>History</h1>} />
                        <Route path="Studio" element={<h1>Studio</h1>} />
                        <Route path="Commons" element={<h1>Commons</h1>} />
                        <Route path="Help" element={<h1>Help</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;