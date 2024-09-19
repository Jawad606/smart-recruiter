import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJobAvertize } from "../../../features/JobAdvertize";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddJob() {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const [title, setTitle] = useState("");
  const [senioirty, setSenioirty] = useState("");
  const [description, setDescription] = useState("");
  const [closing, setClosing] = useState("");
  const [types, setType] = useState("");
  const [work, setWork] = useState("");
  const [jobDescFiles, setUploadedFiles] = useState([]);
  const [salaryfrom, setSalaryfrom] = useState("");
  const [salaryto, setSalaryto] = useState("");

  const nevigate = useNavigate();

  const formData = new FormData();
  const handleDelete = (tag) => {
    setSkills(skills.filter((item, i) => i !== tag));
  };
  const HandleSkills = () => {
    if (skills.length < 3) setSkills((old) => [...old, skill]);
    setSkill("");
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    formData.append("title", title);
    formData.append("type", types);
    formData.append("work", work);
    formData.append("salary", `${salaryfrom}-${salaryto}`);
    formData.append("skills", skills);
    formData.append("description", description);
    formData.append("jobdesc", jobDescFiles[0]);
    formData.append("senioirty", senioirty);

    dispatch(addJobAvertize(formData))
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
        setClosing("");
        setDescription("");
        setSalaryfrom("");
        setSalaryto("");
        setSkill("");
        setSkills([]);
        setTitle("");
        setType("");
        setWork("");
        nevigate("/organization/jobadvertize");
      })
      .catch((res) => console.log(res));
  };
  return (
    <>
      <div className="col-10 AddJob Allow">
      <ToastContainer />
        <div className="container-fluid pt-5">
          <h3 className="text-center">Job Details</h3>
          <form onSubmit={HandleSubmit}>
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 feild d-flex align-items-center ">
                        <h6 className="content">
                          Title <span className="require">*</span>
                        </h6>
                      </div>
                      <div className="col-12 input">
                        <input
                          type="text"
                          required
                          placeholder="Example: Data Science, Web Developer"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 feild d-flex align-items-center ">
                        <h6 className="content">
                          Job Type<span className="require">*</span>
                        </h6>
                      </div>
                      <div className="col-12 input">
                        <select
                          value={types}
                          required
                          onChange={(e) => setType(e.target.value)}
                          placeholder="Work Place"
                        >
                          <option selected>Workplace Type</option>
                          <option value="On Site">On Site</option>
                          <option value="Remote">Remote</option>
                          <option value="Hybird">Hybird</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 feild d-flex align-items-center ">
                        <h6 className="content">
                          Employment Type<span className="require">*</span>
                        </h6>
                      </div>
                      <div className="col-12 input">
                        <select
                          value={work}
                          required
                          onChange={(e) => setWork(e.target.value)}
                        >
                          <option selected>Work type</option>
                          <option value="Full Time">Full Time</option>
                          <option value="Part Time">Part Time</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 feild d-flex align-items-center ">
                        <h6 className="content">
                          Seniority Level <span className="require">*</span>
                        </h6>
                      </div>
                      <div className="col-12 input">
                        <select
                          value={senioirty}
                          required
                          onChange={(e) => setSenioirty(e.target.value)}
                        >
                          <option selected>Work type</option>
                          <option value="Full Time">Beginner</option>
                          <option value="Part Time">Intermediate</option>
                          <option value="Part Time">Expert</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 feild d-flex align-items-center ">
                        <h6 className="content">
                          Salary<span className="require">*</span>
                        </h6>
                      </div>
                      <div className="col-6 input">
                        <input
                          type="number"
                          required
                          placeholder="10000"
                          className="pe-2"
                          value={salaryfrom}
                          onChange={(e) => setSalaryfrom(e.target.value)}
                        />
                      </div>
                      <div className="col-6 input">
                        <input
                          type="number"
                          required
                          placeholder="35000"
                          className="pe-2"
                          value={salaryto}
                          onChange={(e) => setSalaryto(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 feild d-flex align-items-center ">
                        <h6 className="content">
                          Job Closing <span className="require">*</span>
                        </h6>
                      </div>
                      <div className="col-12 input">
                        <input
                          type="Date"
                          required
                          value={closing}
                          onChange={(e) => setClosing(e.target.value)}
                          placeholder="10-10-2023"
                        />
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
                            placeholder="Add 3 Skills"
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
                            {item}{" "}
                            <span onClick={() => handleDelete(i)}>x</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 feild d-flex align-items-center ">
                        <h6 className="content">
                          Job Description <span className="require">*</span>
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
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddJob;
