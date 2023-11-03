import React from 'react';

function TopButtons({ onAddModuleClick }) {
    return (
        <div className="wd-mod-buttons d-flex justify-content-end me-4 mt-2">
            <button type="button" className="btn btn-outline-dark btn-light me-1">Collapse All</button>
            <button type="button" className="btn btn-outline-dark btn-light me-1">View Progress</button>
            <div className="dropdown me-1">
                <button type="button" className="btn btn-outline-dark btn-light dropdown-toggle" data-bs-toggle="dropdown">
                    <i className="fa fa-check-circle-o" style={{color: 'rgb(22, 189, 22)'}} aria-hidden="true"></i> Publish All
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Publish all modules and items</a></li>
                    <li><a className="dropdown-item" href="#">Publish modules only</a></li>
                    <li><a className="dropdown-item" href="#">Unpublish all modules and items</a></li>
                </ul>
            </div>
            <button type="button" className="btn btn-danger me-1" onClick={onAddModuleClick}>+ Module</button>
            <button type="button" className="btn btn-outline-dark btn-light"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
        </div>
    );
}

export default TopButtons;
