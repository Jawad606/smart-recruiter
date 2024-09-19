import React from "react";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className="">
      <ToastContainer />
      <div className="container-fluid bg-color-section-1 bg-color-section-container d-flex align-items-center">
        <div className="container">
          <div className="row gap-md-5 gap-lg-0  px-3">
            <div className="col-lg-6 col-md-12 d-flex align-items-center py-5 py-md-5 py-lg-0 ">
              <div className="section-1 d-flex justify-content-md-center flex-column flex-md-column flex-lg-column">
                <h1>Achieve Hiring Success</h1>
                <p>
                  SmartRecruiters is the industry's only modern and
                  enterprise-grade talent acquisition suite that empowers
                  businesses to hire talent on-demand, and under budget.
                </p>

                <button
                  onClick={() => navigate("/organization/resumeselection")}
                >
                  Smart Recruiter
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-md-center py-5 py-md-5 py-lg-0">
              <img
                src="img/jumbotron-ftr-ats.png"
                alt="section1"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-color-section-2 bg-color-section-container">
        <div className="container">
          <div className="row gap-md-5 gap-lg-0  px-3">
            <div className="col-lg-6 d-flex align-items-center ">
              <div className=".section-1 ">
                <h1>Everything to Filter Candidate</h1>
                <p>
                  In the past hiring the one of the time taking job. Recruiter
                  go through each resume one by to shortlist one. Now you are
                  one click away from hiring.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src="img/undraw_Hiring_re_yk5n(1).png"
                alt="section1"
                width={"90%"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-color-section-3 bg-color-section-container d-flex align-items-center">
        <div className="container ">
          <div className="row gap-md-5 gap-lg-0  px-3">
            <div className="col-lg-6 d-flex align-items-center ">
              <div className="section-1 ">
                <h1>Our Algorithm provide 85% accuracy</h1>
                <p>
                  Our machine learning algorithm read your resume and job
                  description. Then clean it and apply algorithm for text
                  similarity check. And give you result
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                src="img/undraw_Data_re_80ws.png"
                alt="section1"
                width={"90%"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-color-section-4 bg-color-section-container d-flex align-items-center">
        <div className="container">
          <div className="row  px-3 d-flex justify-content-center gap-lg-5 gap-md-0">
            <div className="col-lg-12 text-center py-md-3 py-lg-0">
              <h1>Driving impact for our customers</h1>
            </div>
            <div className="col-lg-3 col-md-6 text-center py-3 py-md-0">
              <h4>Candidate Experience</h4>
              <img
                src="img/undraw_Grades_re_j7d6.png"
                alt=""
                width={"100%"}
                height={"70%"}
              />
              <h2> +166% </h2>
              <h6>More Applications</h6>
            </div>
            <div className="col-lg-3 col-md-6  text-center  py-3 py-md-0">
              {" "}
              <h4>Manager Engagement</h4>
              <img
                src="img/undraw_Agreement_re_d4dv.png"
                alt=""
                width={"100%"}
                height={"70%"}
              />
              <h2> +63% </h2>
              <h6>Faster Response Time</h6>
            </div>
            <div className="col-lg-3 col-md-6   text-center">
              <h4>Recruiter Productivity</h4>
              <img
                src="img/undraw_Statistic_chart_re_w0pk.png"
                alt=""
                width={"100%"}
                height={"70%"}
              />
              <div>
                <h2> +59% </h2>
                <h6>More Time Spent on Relationship Building</h6>
              </div>
            </div>
          </div>
          <div className="row  px-3 d-flex justify-content-center gap-lg-5 gap-md-0">
            <div className="col-lg-12 col-md-12 h-100 pt-5 d-flex justify-content-center">
              <button onClick={() => navigate("/organization/resumeselection")}>
                Smart Recruiter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
