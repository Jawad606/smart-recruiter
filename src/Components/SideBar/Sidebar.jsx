import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  const user = JSON.parse(localStorage.getItem("Data"));
  return (
    <div className="Sidebar col-2">
      <div className="container-fluid parent p-0">
        <div className="header">
          <img
            src={
              user.profile
                ? `http://localhost:5000/${user.profile.slice(7)}`
                : ""
            }
            alt="logo"
            className="companyLogo"
          />
          <h3>{user.username}</h3>
        </div>
        <hr />
        <div className="contents">
          <Navbar className="p-0">
            <Nav className="p-0">
              <NavItem className="navBox">
                {" "}
                <NavLink to="/organization/" className=" nav-link ">
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem className="navBox">
                {" "}
                <NavLink
                  to="/organization/jobadvertize"
                  className=" nav-link  "
                >
                  Job Advertize
                </NavLink>
              </NavItem>
              <NavItem className="navBox">
                {" "}
                <NavLink
                  to="/organization/candidateapply"
                  className=" nav-link "
                >
                  Applied Candiate
                </NavLink>
              </NavItem>
              <NavItem className="navBox">
                {" "}
                <NavLink
                  to="/organization/resumeselection"
                  className=" nav-link "
                >
                  Bulk Resumes
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <hr />
        <div className="footer">
          <div className="navBox">
            {" "}
            <h5>Logout</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
