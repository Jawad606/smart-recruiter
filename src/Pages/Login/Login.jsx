import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../../features/Signin";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const nevigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const value = {
      email: email,
      password: password,
    };
    dispatch(login(value))
      .then((res) => {
        if (res.payload.success) {
          toast.success("You loged in", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          const account = JSON.parse(localStorage.getItem("Data")).account;
          if (account === "candidate") {
            nevigate("/");
          } else {
            nevigate("/organization");
          }
          setEmail("");
          setPassword("");
        } else {
          toast.error("Wrong Password or Username", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((res) => {
        console.log("err");
        toast.error(res.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEmail("");
        setPassword("");
      });
  };
  const HandleReset = (e) => {
    e.preventDefault();
    const value = {
      email: email,
      password: password,
    };
    dispatch(reset(value))
      .then((res) => {
        toast.success("You loged in", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEmail("");
        setPassword("");
      })
      .catch((res) => {
        console.log(res);
        toast.error(res.err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEmail("");
        setPassword("");
      });
  };
  return (
    <>
      <ToastContainer />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Reset Password</ModalHeader>
        <form onSubmit={HandleReset}>
          <ModalBody>
            <div className="col-lg-12 ">
              <div className="row d-flex justify-content-center">
                <div className="col-12 feild d-flex align-items-center ">
                  <h6 className="content">Email</h6>
                </div>
                <div className="col-12 input">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row d-flex justify-content-center">
                <div className="col-12 feild d-flex align-items-center ">
                  <h6 className="content">New Password</h6>
                </div>
                <div className="col-12 input">
                  <input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle} type="submit">
              Reset
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
      <div className="login">
        <h1>Sign In</h1>
        <div className="container pt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5 col-sm-12">
              <form onSubmit={HandleSubmit}>
                <div className="col-lg-12 ">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 feild d-flex align-items-center ">
                      <h6 className="content">Email</h6>
                    </div>
                    <div className="col-12 input">
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 feild d-flex align-items-center ">
                      <h6 className="content">Password</h6>
                    </div>
                    <div className="col-12 input">
                      <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 my-3 d-flex justify-content-center">
                      <button type="submit" className="px-3 ">
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-end">
                  <div className="col-6 feild d-flex align-items-center ">
                    <Link to="/Signup">
                      {" "}
                      <p>Don't have an account?</p>
                    </Link>
                  </div>
                  <div className="col-6 input text-end" onClick={toggle}>
                    <p className="danger">Forget Passoword?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
