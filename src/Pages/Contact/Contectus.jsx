import React from "react";
import Lottie from "react-lottie";
import * as contect from "./Lottie/N5_JSON_(Contact).json";
import "./Contactus.css";
import Footer from "../../Components/Footer/Footer";
function Contectus() {
  const defaultOptionContect = {
    loop: true,
    autoplay: true,
    animationData: contect,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
    <div className="bg-color-contact contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 lottie">
            {/* contect us animation. */}
            <Lottie
              options={defaultOptionContect}
              height={"auto"}
              width={"233px"}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center pt-5 pb-2 animate">
            <h1> CONTACT</h1>
          </div>
          <div className="col-lg-12 text-center pb-5">
            <h6>Give us your valuable feedback ! </h6>
          </div>
        </div>
      </div>
      <div className="container pt-2">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 col-sm-12">
            <div className="col-lg-12 ">
              <div className="row d-flex justify-content-center">
                <div className="col-12 feild d-flex align-items-center ">
                  <h6 className="content">Name</h6>
                </div>
                <div className="col-12 input">
                  <input type="text" placeholder="Your name" />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row d-flex justify-content-center">
                <div className="col-12 feild d-flex align-items-center ">
                  <h6 className="content">Email</h6>
                </div>
                <div className="col-12 input">
                  <input type="text" placeholder="Your email" />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row d-flex justify-content-center">
                <div className="col-12 feild d-flex align-items-center ">
                  <h6 className="content">Message</h6>
                </div>
                <div className="col-12 input">
                  <textarea
                    className="w-100"
                    rows={7}
                    style={{ resize: "None" }}
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row d-flex justify-content-center">
                <div className="col-12 my-3 d-flex justify-content-center">
                  <button className="px-3 ">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contectus;
