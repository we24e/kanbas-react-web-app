import React, { useState } from 'react';
import ModuleList from "./ModuleList";
import TopButtons from "./TopButtons";
import "./index.css";

function Modules() {
    const [showAddModuleInput, setShowAddModuleInput] = useState(false);

    const toggleAddModuleInput = () => {
        setShowAddModuleInput(!showAddModuleInput);
    };

    return (
        <div> 
            <TopButtons onAddModuleClick={toggleAddModuleInput} />
            <hr className='me-4'/>
            <ModuleList showAddModuleInput={showAddModuleInput} setShowAddModuleInput={setShowAddModuleInput}/>
        </div>
    );
}

export default Modules;
