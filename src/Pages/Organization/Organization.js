import React from "react";
import { Outlet } from "react-router-dom";
import './Organization.css'
import Sidebar from "../../Components/SideBar/Sidebar";

function Organization(props) {
  return (
    <div className="container-fluid">
      <div className="row Organization">
        <Sidebar  />
        <Outlet  />
      </div>
    </div>
  );
}

export default Organization;
