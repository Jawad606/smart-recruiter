import React from "react";
import "./Aboutus.css";
import Footer from "../../Components/Footer/Footer";
function Aboutus() {
  return (
    <>
    <div className=" about">
      <div className="container about">
        <div className="row py-5 animate">
          <h1 className='text-center'>ABOUT</h1>
          <div className="col-lg-12 col-12">
            <div className="row py-4  gap-3 d-flex align-items-center shadow-lg ps-5  mb-5 bg-body-tertiary rounded">
              <div className="col-4">
                <div class="row container--hero d-flex  align-items-center justify-content-center">
                  <div class="hero-img-wrap">
                    <div class="hero-img-container">
                      <img
                        src="/img/sup.jpeg"
                        alt="Portraitfoto von Moritz Petersen, dem Webflow Experten"
                        class="hero-img"
                      />
                    </div>
                    <div id="hero-img-shadow-1" class="hero-img-shadow-wrap">
                      <div class="hero-img-shadow"></div>
                    </div>
                    <div
                      id="hero-img-shadow-2"
                      class="hero-img-shadow-wrap hero-img-shadow-wrap--intro"
                    >
                      <div class="hero-img-shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7 px-5">
                <div className="row d-flex align-items-center">
                  <div className="col-3">
                    <h3 className='head'>Name</h3>
                  </div>
                  <div className="col-9">
                    <h4 className='texts'>Mr. Syed Ammir Ahmed Gillani</h4>
                  </div>
                  <div className="col-3">
                    <h3 className='head'>Role</h3>
                  </div>
                  <div className="col-9">
                    <h4 className='texts'>supervior</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4 gap-3 d-flex align-items-center shadow-lg mb-5 bg-body-tertiary rounded">
            <div className="col-7 px-5">
                <div className="row d-flex align-items-center">
                  <div className="col-3">
                     <h3 className='head'>Name</h3>
                  </div>
                  <div className="col-9">
                    <h4 className='texts'>Dr. Waheed Rahmay</h4>
                  </div>
                  <div className="col-3">
                     <h3 className='head'>Role</h3>
                  </div>
                  <div className="col-9">
                    <h4 className='texts'>Co Supervisor</h4>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div class="row container--hero d-flex  align-items-center justify-content-center">
                  <div class="hero-img-wrap">
                    <div class="hero-img-container">
                      <img
                        src="/img/cosup.jpeg"
                        alt="Portraitfoto von Moritz Petersen, dem Webflow Experten"
                        class="hero-img"
                      />
                    </div>
                    <div id="hero-img-shadow-1" class="hero-img-shadow-wrap">
                      <div class="hero-img-shadow"></div>
                    </div>
                    <div
                      id="hero-img-shadow-2"
                      class="hero-img-shadow-wrap hero-img-shadow-wrap--intro"
                    >
                      <div class="hero-img-shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
            <div className="row py-4 gap-3 d-flex align-items-center shadow-lg  ps-5 mb-5 bg-body-tertiary rounded">
              <div className="col-4">
                <div class="row container--hero d-flex  align-items-center justify-content-center">
                  <div class="hero-img-wrap">
                    <div class="hero-img-container">
                      <img
                        src="/img/test.jpg"
                        alt="Portraitfoto von Moritz Petersen, dem Webflow Experten"
                        class="hero-img"
                      />
                    </div>
                    <div id="hero-img-shadow-1" class="hero-img-shadow-wrap">
                      <div class="hero-img-shadow"></div>
                    </div>
                    <div
                      id="hero-img-shadow-2"
                      class="hero-img-shadow-wrap hero-img-shadow-wrap--intro"
                    >
                      <div class="hero-img-shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7 px-5">
                <div className="row d-flex align-items-center">
                  <div className="col-3">
                     <h3 className='head'>Name</h3>
                  </div>
                  <div className="col-9">
                    <h4 className='texts'>Mr M. Jawad Hassan</h4>
                  </div>
                  <div className="col-3">
                     <h3 className='head'>Role</h3>
                  </div>
                  <div className="col-9">
                    <h4 className='texts'>Full Stack Developer</h4>
                  </div>
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

export default Aboutus;
