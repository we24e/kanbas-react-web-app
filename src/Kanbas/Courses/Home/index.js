import React from 'react';
import Modules from '../Modules';
import Status from '../Status';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-9 pe-0 ps-0">
                    <Modules />
                </div>
                <div className="d-none d-lg-block col-lg-3 pe-4 ps-1">
                    <Status />
                </div>
            </div>
        </div>
    );
}

export default Home;
