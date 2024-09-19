import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showJobAvertize } from "../../../features/JobAdvertize";
import { fetchResume, showResume } from "../../../features/resumeSlice";
import { showSR, srAdd } from "../../../features/srSlice";
import "./findDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Spinner,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  addapplied,
  fetchapplied,
  showList,
} from "../../../features/appliedSlice";
function FindDetails() {
  const dispatch = useDispatch();
  const [compare, setCompare] = useState("");
  useEffect(() => {
    dispatch(fetchResume());
    dispatch(fetchapplied());
  }, [dispatch]);
  const { status } = useSelector(showSR);
  const { applied } = useSelector(showList);
  const { resumeList } = useSelector(showResume);
  const { id } = useParams();
  const { JobAvertizeList } = useSelector(showJobAvertize);
  const formData = new FormData();
  const userID = JSON.parse(localStorage.getItem("Data"));
  const [resumeid, setResumeId] = useState("");
  const [resumeTitle, setResumetitle] = useState("Resume");
  const [appliedUser, setAppliedUser] = useState(0);
  useEffect(() => {
    setAppliedUser(
      applied.filter((item) => item.user._id === userID._id && item.Job === id)
        .length
    );
  }, [applied, id, userID._id]);

  const HandleCompare = () => {
    const resume = resumeList
      .filter((item) => item.user._id === userID._id && item._id === resumeid)
      .map((item) => item.content);
    const job = JobAvertizeList.filter((item) => item._id === id).map(
      (item) => item.content[0]
    );
    const jobname = JobAvertizeList.filter((item) => item._id === id).map(
      (item) => item.title
    );
    var candidate = resumeList
      .filter((item) => item.user._id === userID._id && item._id === resumeid)
      .map((item) => item.user.username);

    formData.append("contentRes", [resume]);
    formData.append("contentJob", [job]);
    formData.append("filenameJob", [jobname]);
    formData.append("filenameRes", [candidate]);
    dispatch(srAdd(formData)).then((res) => {
      setCompare(res.payload.Scores[0].toFixed(2));
    });
  };
  var candidates = userID._id;
  const HandleApply = () => {
    const value = {
      Job: id,
      user: String(candidates),
      score: compare,
      resume: resumeid,
    };
    dispatch(addapplied(value)).then((res) => {
      setResumeId("");
      setResumetitle("Resume");
      toast.success("Your resume sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };
  return (
    <>
    <ToastContainer/>
    <div className="findDetails container py-5 ">
      <div className="row d-flex justify-content-center">
        <div className="col-8 ">
          {JobAvertizeList.filter((item) => item._id === id).map((item, i) => (
            <>
              <div className="col-12 title pb-3">
                <h1 className="pb-3">{item.title}</h1>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="col-3">
                    <div className="row">
                      <div className="col-12 pb-5">
                        <h6 className="up">By</h6>
                      </div>
                      <div className="col-12">
                        <p className="down">{item.user.username}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="col-12 pb-5">
                        <h6 className="up">Posted Date</h6>
                      </div>
                      <div className="col-12">
                        <p className="down">
                          {new Intl.DateTimeFormat("en-US", {
                            dateStyle: "long",
                          }).format(new Date(Date.parse(item.createdAt)))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="row">
                      <div className="col-12 pb-5">
                        <h6 className="up">Salary</h6>
                      </div>
                      <div className="col-12">
                        <p className="down">{item.salary}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="col-12 pb-4">
                        <ButtonGroup className="my-2">
                          {status === "LoadingAdd" ? (
                            <Button className="compare" disabled>
                              <Spinner size="sm"> Comparing...</Spinner>
                            </Button>
                          ) : (
                            <Button
                              onClick={() => HandleCompare()}
                              className="compare"
                            >
                              <span>Compare</span>
                            </Button>
                          )}
                          <ButtonGroup>
                            <UncontrolledDropdown>
                              <DropdownToggle caret>
                                {resumeTitle}
                              </DropdownToggle>
                              <DropdownMenu>
                                {resumeList
                                  .filter(
                                    (item) => item.user._id === userID._id
                                  )
                                  .map((item) => (
                                    <DropdownItem
                                      onClick={() => {
                                        setResumeId(item._id);
                                        setResumetitle(item.job);
                                      }}
                                    >
                                      {item.job}
                                    </DropdownItem>
                                  ))}
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </ButtonGroup>
                        </ButtonGroup>
                      </div>
                      <div className="col-12">
                        <h6 className="down">Score: {compare}%</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <h4>Description</h4>
                    </div>
                    <div className="col-12">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row h-100 w-100">
                    <Button
                      onClick={() => HandleApply()}
                      className="compare"
                      disabled={appliedUser < 1 ? false : true}
                    >
                      <span>Apply</span>
                    </Button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-12 input d-flex flex-wrap">
                {item.skills[0].split(",").map((item, i) => (
                  <p className="skills">{item}</p>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
export default FindDetails;