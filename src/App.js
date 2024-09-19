import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import SmartRecruiter from "./Pages/SmartRecruiter/SmartRecruiter";
import Result from "./Pages/Result/Result";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Aboutus from "./Pages/About/Aboutus";
import Contectus from "./Pages/Contact/Contectus";
import Signup from "./Pages/SignUp/Signup";
import Login from "./Pages/Login/Login";
import CandidateSignup from "./Components/CandidateSignup/CandidateSignup";
import OrganizationSignup from "./Components/OrganizationSignup/OrgnaizationSignUp";
import Organization from "./Pages/Organization/Organization";
import Dashboard from "./Components/Organizations/DashBoard/Dashboard";
import JobAdvertize from "./Components/Organizations/JobAdvertize/JobAdvertize";
import CandidateApply from "./Components/Organizations/CandidateApply/CandidateApply";
import BulkResumes from "./Components/Organizations/BulkResumes/BulkResumes";
import Profile from "./Components/Organizations/Profile/Profile";
import AddJob from "./Components/Organizations/JobAdvertize/AddJob";
import FindaJob from "./Pages/FindaJob/FindaJob";
import CProfile from "./Components/Candidate/Profile/C_Profile";
import FindDetails from "./Pages/FindaJob/Details/FIndDetails";
import CandidateDetails from "./Components/Organizations/CandidateApply/Details";
import CV from "./Components/Organizations/CandidateApply/CV";
import CandidateJobInfo from "./Components/Candidate/CandidateJobInfo/CandidateJobInfo";
import AppliedCan from "./Components/Candidate/CandidateApplied/AppliedCan";
import CND from "./Components/Candidate/CandidateApplied/CND/CND";
function App() {
  return (
    <div className="App bg-color">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/smartrecruiter" element={<SmartRecruiter />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contectus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/findajob" element={<FindaJob />} />
          <Route path="/CandidateSignup" element={<CandidateSignup />} />
          <Route path="/RecruiterSignup" element={<OrganizationSignup />} />
          <Route path="/candidate" element={<CProfile />} />
          <Route path="/candidateresume" element={<CandidateJobInfo />} />
          <Route path="/candidateapplied" element={<AppliedCan />} />
          <Route path="/candidatejob/:id" element={<CND />} />
          <Route path="/finddetail/:id" element={<FindDetails />} />

          <Route path="/organization" element={<Organization />}>
            <Route index element={<Dashboard />} />
            <Route
              path="/organization/jobadvertize"
              element={<JobAdvertize />}
            />
            <Route
              path="/organization/candidateapply"
              element={<CandidateApply />}
            />
            <Route
              path="/organization/resumeselection"
              element={<BulkResumes />}
            />
            <Route path="/organization/profiles" element={<Profile />} />
            <Route path="/organization/addjob" element={<AddJob />} />
            <Route
              path="/organization/candidatedetails/:id"
              element={<CandidateDetails />}
            />
            <Route
              path="/organization/cv/:id"
              element={<CV />}
            />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
