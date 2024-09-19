import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addresume } from "../../../features/resumeSlice";
import "./Profile.css";

function CProfile() {
  const nevigate = useNavigate();
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [job, setJob] = useState("");
  const [intro, setIntro] = useState("");
  const [jobDescFiles, setUploadedFiles] = useState([]);
  const dispatch = useDispatch();
  const formData = new FormData();
  const HandleSubmit = (e) => {
    e.preventDefault();
    formData.append("skills", skills);
    formData.append("job", job);
    formData.append("introduction", intro);
    formData.append("resume", jobDescFiles[0]);
    dispatch(addresume(formData)).then((res) => nevigate("/candidateresume"));
  };
  const handleDelete = (tag) => {
    setSkills(skills.filter((item, i) => i !== tag));
  };
  const HandleSkills = () => {
    if (skills.length < 10) setSkills((old) => [...old, skill]);
    setSkill("");
  };
  return (
    <div className="c_profile">
      <h3 className="text-center py-3">Candidate Job Infomation</h3>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <form onSubmit={HandleSubmit}>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">
                      Job Role <span className="require">*</span>
                    </h6>
                  </div>
                  <div className="col-12 input pe-0">
                    <input
                      className="pt-1"
                      type="text"
                      value={job}
                      required
                      onChange={(e) => setJob(e.target.value)}
                      placeholder="Web Development, ML Engineer"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">
                      Overview <span className="require">*</span>
                    </h6>
                  </div>
                  <div className="col-12 input pe-0">
                    <textarea
                      type="text"
                      required
                      rows={6}
                      placeholder="Describe job"
                      value={intro}
                      onChange={(e) => setIntro(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">
                      Skills <span className="require">*</span>
                    </h6>
                  </div>
                  <div className="col-12 input pe-0">
                    <div class="input-group mb-3 d-flex justify-content-center">
                      <input
                        className="form-control me-0"
                        type="text"
                        placeholder="Add 10 Skills"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                      />
                      <span
                        class="input-group-text"
                        id="basic-addon2"
                        onClick={() => HandleSkills()}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div className="col-12 input d-flex px-4 flex-wrap">
                    {skills.map((item, i) => (
                      <p className="skills">
                        {item} <span onClick={() => handleDelete(i)}>x</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 feild d-flex align-items-center ">
                    <h6 className="content">
                      Resume <span className="require">*</span>
                    </h6>
                  </div>
                  <div className="col-12 input pe-0">
                    <input
                      className="pt-1"
                      type="file"
                      required
                      onChange={(e) => setUploadedFiles(e.target.files)}
                      name="jobdescription"
                      id="jobdescription"
                      accept=".doc, .docx, .pdf, .txt"
                      placeholder="Upload Job Descriptin pdf"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-4 my-3">
                    <button type="submit">Get the Job</button>
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

export default CProfile;
