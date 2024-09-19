import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
function Signup() {
  return (
    <div className="Signup">
      <h1 className="membership ">Choose Membership</h1>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center gap-4">
          <div className="col-3 box">
              <h5> As Candiate</h5>
            <div>
              <ul>
                <li>Upload Resume</li>
                <li>Apply for Job</li>
                <li>Check Score</li>
                <li>Job Alert</li>
                <li>Improve Resume</li>
              </ul>
            </div>
            <Link to={'/CandidateSignup'} className="w-100 box-btn">Signup</Link>
          </div>
          <div className="col-3 box">
          <h5> As Recruiter</h5>
            <div>
              <ul>
                <li>Upload Resumes</li>
                <li>Advertize Job</li>
                <li>Bulk Resume Selection</li>
                <li>Smart Hiring</li>
                <li>Speedy Hiring</li>
              </ul>
            </div>
            <Link to={'/RecruiterSignup'} className="w-100 box-btn">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
