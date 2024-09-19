/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { srAdd, showSR } from "../../features/srSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SmartRecruiter.css";
import Loading from "../../Components/Loading/Loading";
import { addbulk, showList } from "../../features/bulkSlice";
function SmartRecruiter() {
  const { bulk, status } = useSelector(showList);
  const nevigat = useNavigate();
  const dispatch = useDispatch();
  const [jobDescFiles, setUploadedFiles] = useState([]);
  const [resumeFiles, setResumeFiles] = useState([]);
  const formData = new FormData();
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("contentJob", jobDescFiles[0]);
    for (let i = 0; i < resumeFiles.length; i++) {
      formData.append("contentRes", resumeFiles[i]);
    }
    console.log(formData);
    dispatch(addbulk(formData))
      .then((res) => {
        console.log(res.payload);
        dispatch(srAdd(res.payload)).then((res) => console.log(res));
        nevigat("/result");
      })
      .catch((res) => console.log("Error", res));
  };

  return (
    <>
      {status === "LoadingAdd" ? (
        <Loading loading="Reading Files..." />
      ) : (
        <div className="container-fluid bg-color-smart px-3 py-5">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-12 py-5">
                <h1>Smart Recruiter</h1>
              </div>
              <form
                className="row d-flex justify-content-center gap-3"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="inputBox-main  d-flex align-items-center justify-content-center flex-column">
                        <img
                          src="/img/cloud-upload-regular-240.png"
                          width="30%"
                          alt="upload"
                        />
                        <h6>Upload Job Describtion</h6>
                        <input
                          onChange={(e) => setUploadedFiles(e.target.files)}
                          type="file"
                          name="jobdescription"
                          id="jobdescription"
                          accept=".doc, .docx, .pdf, .txt"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 box-scroll">
                      {jobDescFiles.length > 0 ? (
                        <div className="row files d-flex align-items-center">
                          <div className="col-2 col-lg-1 icon">
                            <img
                              src="/img/file-pdf-solid-240.png"
                              width={"50px"}
                              alt="png"
                            />
                          </div>
                          <div className="col-9 px-1 cname px-4   text-start d-flex align-items-cente">
                            <h6 className="m-0 ">{jobDescFiles[0].name}</h6>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="inputBox-main  d-flex align-items-center justify-content-center flex-column">
                        <img
                          src="/img/cloud-upload-regular-240.png"
                          width="30%"
                          alt="upload"
                        />
                        <h6>Upload Resume Describtion</h6>
                        <input
                          onChange={(e) => setResumeFiles([...e.target.files])}
                          type="file"
                          name="resumes"
                          id="resumes"
                          accept=".doc, .docx, .pdf, .txt"
                          multiple="true"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 box-scroll ">
                      {resumeFiles.map((item, i) => {
                        return (
                          <div className="row files d-flex align-items-center">
                            <div className="col-2  col-lg-1  icon">
                              <img
                                src="/img/file-pdf-solid-240.png"
                                width={"50px"}
                                alt="png"
                              />
                            </div>
                            <div className="col-9 cname px-4   text-start d-flex align-items-cente">
                              <h6>{item.name}</h6>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {resumeFiles.length > 0 && jobDescFiles.length > 0 ? (
                  <div className="col-lg-5 d-flex justify-content-center">
                    <button class="smart__button" type="submit">
                      Let Hire...
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SmartRecruiter;

// const { srList, status } = useSelector(showSR);
// const dispatch = useDispatch();
// const [jobDescFiles, setUploadedFiles] = useState([]);
// const [resumeFiles, setResumeFiles] = useState([]);
// const formData = new FormData();
// const handleSubmit = (e) => {
//   e.preventDefault();
//   formData.append("jobdesc", jobDescFiles[0]);
//   for (let i = 0; i < resumeFiles.length; i++) {
//     formData.append("resume", resumeFiles[i]);
//   }

//   dispatch(srAdd(formData))
//     .then((res) => console.log(res))
//     .catch((res) => console.log("errir", res));
// };
// const renderList =
// srList.map((items) =>
//   items.Scores.map((item, i) => {
//     return (
//       <tr key={i}>
//         <td>{i}</td>
//         <td>{items.Name[i]}</td>
//         <td>{item}</td>
//         <td>{items.Rank[i]}</td>
//       </tr>
//     );
//   })
// );

{
  /* <div className="App">
<header className="App-header">
  <form onSubmit={handleSubmit} encType="multipart/form-data">
    <h2 class="my-4">Only Upload Single Job Description</h2>
    <input type="hidden" name="jobdesc" value="" />
    <input
      onChange={(e) => setUploadedFiles(e.target.files)}
      type="file"
      name="jobdescription"
      id="jobdescription"
      accept=".doc, .docx, .pdf, .txt"
    />
    <br />
    <h2 class="my-4">Upload Resumes</h2>
    <input
      onChange={(e) => setResumeFiles(e.target.files)}
      type="file"
      name="resumes"
      id="resumes"
      accept=".doc, .docx, .pdf, .txt"
      multiple="true"
    />
    <br />
    <button class="btn btn-dark my-4" type="submit">
      Submit
    </button>
  </form>
  {status === "success" && (
    <table className="table table-hover ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Scores</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>{renderList}</tbody>
    </table>
  )}
</header>
</div> */
}
