import { Link, useLocation } from "react-router-dom";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { BiSolidBook } from "react-icons/bi";
import { FaInbox } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { LuMonitorPlay } from "react-icons/lu";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { BiHelpCircle } from "react-icons/bi";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const { pathname } = useLocation();
    const linkToIconMap = {
        Account: <FaUserCircle className="wd-account"/>,
        Dashboard: <TfiDashboard className="wd-icon"/>,
        Courses: <BiSolidBook className="wd-icon"/>,
        Calendar: <FaCalendarAlt className="wd-icon"/>,
        Inbox: <FaInbox className="wd-icon"/>,
        History: <BsClockHistory className="wd-icon"/>,
        Studio: <LuMonitorPlay className="wd-icon"/>,
        Commons: <FaArrowRightFromBracket className="wd-icon"/>, 
        Help: <BiHelpCircle className="wd-icon"/>
    };
    
    return (
        <div className="list-group wd-kanbas-nav knav d-none d-sm-block">
            <div className="list-group-item">
                <img src="/images/neulogo.jpg" alt="logo" className="wd-logo"/>
            </div>
            {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {linkToIconMap[link]}
                    {link}
            </Link>
            ))}
        </div>
        );
}
export default KanbasNavigation;