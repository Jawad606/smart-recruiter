/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Signupoc.css";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { adduser } from "../../features/Signin";
import { useNavigate } from "react-router-dom";
import { Country, City } from "country-state-city";
function CandidateSignup() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [picture, setPicture] = useState();
  const [imgData, setImgData] = useState();
  const [name, setName] = useState("");
  const [jobrole, setJobRole] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [country, setCountry] = useState("");
  const [countryId, setCountryId] = useState("");
  const [toggle, setToggle] = useState(false);

  const [city, setCity] = useState("");
  const [toggles, setToggles] = useState(false);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const formData = new FormData();
  const HandleSubmit = (e) => {
    e.preventDefault();
    formData.append("username", name);
    formData.append("type", jobrole);
    formData.append("phoneno", phoneno);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profile", picture);
    formData.append("account", "candidate");
    formData.append("country", countryId);
    formData.append("city", city);
    dispatch(adduser(formData))
      .then((res) => {
        nevigate(`/login`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup py-3">
      <h1>Welcome to Smart Recrutier</h1>
      <div className="container mt-5 bor">
        <div className="row  d-flex justify-content-center">
          <div className="col-lg-5 col-sm-12">
            <form onSubmit={HandleSubmit}>
              <div className="col-lg-12">
                <div className="form-group row py-2 ">
                  <div className="col-sm-12">
                    <div className="row d-flex justify-content-center">
                      <div className="main col-12">
                        <img
                          src={imgData}
                          className="img-responsive"
                          width={"200px"}
                          height={"auto"}
                        />
                        <label className="center">
                          <AiFillCamera className="" />
                          <input
                            type="file"
                            name="myImage"
                            onChange={onChangePicture}
                            className="input-large"
                          />
                        </label>
                      </div>
                      <div className="col-12 text-center">
                        {" "}
                        <label
                          htmlFor="nickName"
                          className="col-sm-4 text-lg-center text-md-center text-cetner col-form-label"
                        >
                          {" "}
                          Profile Image
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">Candiate Name</h6>
                  </div>
                  <div className="col-12 input">
                    <input
                      type="text"
                      placeholder="Enter company name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">Job Role</h6>
                  </div>
                  <div className="col-12 input">
                    <input
                      type="text"
                      placeholder="Example: DataScience,Web Developer"
                      value={jobrole}
                      onChange={(e) => setJobRole(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">Phone Number</h6>
                  </div>
                  <div className="col-12 input">
                    <input
                      type="text"
                      placeholder="Phone number"
                      value={phoneno}
                      onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  className="row d-flex justify-content-center "
                  style={{ position: "relative" }}
                >
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">Country</h6>
                  </div>
                  <div className="col-12 input">
                    <input
                      className={"conFocus"}
                      type="text"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      onFocus={() => setToggle(true)}
                      onBlur={() =>
                        setTimeout(() => {
                          setToggle(false);
                        }, 400)
                      }
                    />
                    {toggle && (
                      <div
                        className="col-12 countrys"
                        style={{
                          position: "absolute",
                          overflowY: "scroll",
                          padding: "5px 20px",
                          backgroundColor: "#112b3c",
                          border: "1px solid #f66b0e",
                          borderRadius: "5px",
                          zIndex: "2",
                        }}
                      >
                        <table className="table table-hover ">
                          <tbody>
                            {Country.getAllCountries()
                              .filter((item) =>
                                item.name.toLowerCase().includes(country)
                              )
                              .map((item, i) => (
                                <tr
                                  key={i}
                                  onClick={() => {
                                    setCountry(item.name);
                                    setCountryId(item.isoCode);
                                  }}
                                >
                                  {" "}
                                  <td
                                    className="py-2 "
                                    style={{ color: "#fff", cursor: "pointer" }}
                                  >
                                    {item.name}
                                  </td>{" "}
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-12" style={{ zIndex: "0" }}>
                <div
                  className="row d-flex justify-content-center "
                  style={{ position: "relative" }}
                >
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">City</h6>
                  </div>
                  <div className="col-12 input">
                    <input
                      className={"conFocus"}
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      onFocus={() => setToggles(true)}
                      onBlur={() =>
                        setTimeout(() => {
                          setToggles(false);
                        }, 400)
                      }
                    />
                    {toggles && (
                      <div
                        className="col-12 countrys"
                        style={{
                          position: "absolute",
                          overflowY: "scroll",
                          padding: "5px 20px",
                          backgroundColor: "#112b3c",
                          border: "1px solid #f66b0e",
                          borderRadius: "5px",
                        }}
                      >
                        <table className="table table-hover ">
                          <tbody>
                            {City.getAllCities()
                              .filter(
                                (item) =>
                                  item.countryCode === countryId &&
                                  item.name.toLowerCase().includes(city)
                              )
                              .map((item, i) => (
                                <tr
                                  key={i}
                                  onClick={() => {
                                    setCity(item.name);
                                  }}
                                >
                                  {" "}
                                  <td
                                    className="py-2 "
                                    style={{ color: "#fff", cursor: "pointer" }}
                                  >
                                    {item.name}
                                  </td>{" "}
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">Email</h6>
                  </div>
                  <div className="col-12 input">
                    <input
                      type="text"
                      placeholder="Enter Email"
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
                      placeholder="Enter  password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">Re-Password</h6>
                  </div>
                  <div className="col-12 input">
                    <input type="password" placeholder="Enter  password" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-4 my-3">
                    <button type="submit">Let's Connect</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateSignup;
