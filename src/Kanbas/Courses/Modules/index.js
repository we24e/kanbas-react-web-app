import ModuleList from "./ModuleList";
import TopButtons from "./TopButtons";
import "./index.css";

function Modules() {
    return (
        <div> 
            <TopButtons />
            <hr className='me-4'/>
            <ModuleList />
        </div>
    );
}

export default Modules;