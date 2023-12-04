import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./home";
import SignIn from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Project() {
  const [key, setKey] = useState("home");

  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <NavLink to="/project/" className="list-group-item" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink to="/project/signin" className="list-group-item" activeClassName="active-link">
              Signin
            </NavLink>
            <NavLink to="/project/account" className="list-group-item" activeClassName="active-link">
              Account
            </NavLink>
            <NavLink to="/project/signup" className="list-group-item" activeClassName="active-link">
              Signup
            </NavLink>
            <NavLink to="/project/admin/users" className="list-group-item" activeClassName="active-link">
              Users
            </NavLink>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
