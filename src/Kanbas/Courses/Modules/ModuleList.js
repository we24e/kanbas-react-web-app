import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import {
    addModule,
    deleteModule,
    startEditingModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList({ showAddModuleInput, setShowAddModuleInput }) {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const editingModule = useSelector((state) => state.modulesReducer.editingModule);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        dispatch(addModule({ ...module, course: courseId }));
    };
    const handleDeleteModule = (moduleId) => {
        dispatch(deleteModule(moduleId));
    };
    const handleStartEditing = (module) => {
        dispatch(startEditingModule(module));
        setShowAddModuleInput(true);
    };
    const handleUpdateModule = () => {
        dispatch(updateModule(module));
    };

    return (
        <div className="list-group wd-modules ms-2 mt-2 me-4 mb-2">
            {showAddModuleInput && (
                <div>
                    <input
                        className="form-control mb-2"
                        placeholder="Module Name"
                        value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                    />
                    <textarea
                        className="form-control pb-3"
                        placeholder="Module Description"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                    />
                    {editingModule && <button className="float-end btn btn-primary mt-2" onClick={handleUpdateModule}>Update</button>}
                    <button className="float-end me-2 btn btn-success mt-2" onClick={handleAddModule}>Add</button>
                </div>
            )}
            <div>
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div
                            key={module._id || index}
                            className="list-group-item list-group-item-secondary ps-2 pt-3 pb-2 mt-5"
                        >
                            <PiDotsSixVerticalBold className="me-1 mb-1 fw-bold" />
                            <i className="fa fa-ellipsis-v float-end ms-4" aria-hidden="true"></i>
                            <i className="fa fa-plus float-end ms-4" aria-hidden="true"></i>
                            <i className="fa fa-check-circle float-end ms-2" aria-hidden="true"></i>
                            <span className="fw-bold">{module.name} - </span>
                            <span>{module.description}</span>
                            <br/>
                            <button className="btn btn-warning wd-del-edit me-2 ms-3 mt-1" onClick={() => handleStartEditing(module)}>Edit</button>
                            <button className="btn btn-danger wd-del-edit mt-1" onClick={() => handleDeleteModule(module._id)}>Delete</button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ModuleList;
