/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, showUser } from "../../features/Signin";
import CandidateProfile from "../../Pages/Profile/Profile";

function Header() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggleModel = () => setModal(!modal);
  const { status } = useSelector(showUser);
  const [isOpen, setIsOpen] = useState(false);
  const Logout = () => {
    dispatch(logout()).then((res) => {
      nevigate("/");
      setUser({
        _id: "",
        email: "",
        createdAt: "",
        updatedAt: "",
        account: "",
        phoneno: "",
        profile: "",
        type: "",
        username: "",
      });
    });
  };
  const [user, setUser] = useState({
    _id: "",
    email: "",
    createdAt: "",
    updatedAt: "",
    account: "",
    phoneno: "",
    profile: "",
    type: "",
    username: "",
  });
  useEffect(() => {
    setUser(
      JSON.parse(localStorage.getItem("Data"))
        ? JSON.parse(localStorage.getItem("Data"))
        : user
    );
  }, [status]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const RenderMenu = () => {
  //   return (
  //     // <Dropdown className="p-1 z-index" isOpen={dropdownOpen} toggle={toggles}>
  //     //   <DropdownToggle caret>
  // <img
  //   src={`http://localhost:5000/${user.profile.slice(7)}`}
  //   alt={user.username}
  //   width={30}
  //   height={30}
  // />
  //     //   </DropdownToggle>
  //     //   <DropdownMenu>
  //     //     <DropdownItem onClick={toggleModel}>Profile</DropdownItem>
  //     //     <Link
  //     //       to={
  //     //         user.account === "candidate"
  //     //           ? "/candidateresume"
  //     //           : "/organization/"
  //     //       }
  //     //     >
  //     //       {" "}
  //     //       <DropdownItem>
  //     //         {user.account === "candidate" ? "Resume" : "Dashboard"}
  //     //       </DropdownItem>
  //     //     </Link>
  //     // {user.account === "candidate" ? (
  //     //   <Link to={"/candidateapplied"}>
  //     //     {" "}
  //     //     <DropdownItem>Applied</DropdownItem>
  //     //   </Link>
  //     // ) : (
  //     //   ""
  //     //     )}
  //     //     <DropdownItem onClick={() => Logout()}>Logout</DropdownItem>
  //     //   </DropdownMenu>
  //     // </Dropdown>

  // };
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className=" bg-color-header">
      <Modal isOpen={modal} toggle={toggleModel} size="lg">
        <ModalHeader toggle={toggleModel}>Candidate Profile</ModalHeader>
        <ModalBody>
          <CandidateProfile />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModel}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggleModel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Navbar expand={"lg"} className="container">
        <NavbarBrand href="/">
          <img src="/img/logo.png" alt="logo" width={"200px"} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto d-flex align-items-center" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              {user.account === "candidate" ? (
                <NavLink className="nav-link" to="/findajob">
                  Find a Job{" "}
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="organization/">Dashboard</NavLink>
              )}
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contect Us
              </NavLink>
            </NavItem>
            {user.username !== "" ? (
              <>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      src={
                        user.profile
                          ? `http://localhost:5000/${user.profile.slice(7)}`
                          : ""
                      }
                      sx={{ width: 40, height: 40 }}
                    >
                      {user.username}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={toggleModel}>Profile</MenuItem>
                  <MenuItem
                    onClick={() =>
                      nevigate(
                        user.account === "candidate"
                          ? "/candidateresume"
                          : "/organization/"
                      )
                    }
                  >
                    {" "}
                    {user.account === "candidate" ? "Resume" : "Dashboard"}
                  </MenuItem>
                  {user.account === "candidate" ? (
                    <Link to={"/candidateapplied"} style={{ color: "unset" }}>
                      {" "}
                      <MenuItem>Applied</MenuItem>
                    </Link>
                  ) : (
                    ""
                  )}
                  <MenuItem onClick={() => Logout()}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <NavItem>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
