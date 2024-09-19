import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJobAvertize, showJobAvertize } from "../../features/JobAdvertize";
import "./FindaJob.css";
function FindaJob() {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    dispatch(fetchJobAvertize());
  }, [dispatch]);
  const { JobAvertizeList } = useSelector(showJobAvertize);
  let date_2 = new Date();
  const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    let Dates = TotalDays === 0 ? 0 : -(TotalDays - 1);
    return Dates;
  };
  const [row, setRow] = useState([]);
  const handleDelete = (tag) => {
    setSkills(skills.filter((item, i) => i !== tag));
  };
  const HandleSkills = () => {
    if (skills.length < 10) {
      setSkills((old) => [...old, skill]);
      setSkill("");
    }
  };
  useEffect(() => {
    const filterData = () => {
      if (skills.length < 1) {
        return JobAvertizeList;
      } else {
        const skilled = JobAvertizeList.filter((item) =>
        skills.some((keyword) => item.title.toLowerCase().includes(keyword.toLowerCase()))
      );
      
        return skilled;
      }
    };
    console.log(filterData())
    setRow(filterData());
  }, [JobAvertizeList, skills]);

  return (
    <div className="findajob container-fluid">
      <div className="row Header">
        <div className="col-12 input d-flex justify-content-center">
          {/* <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search by Job title, Company"
              value={jobTitle}
              onChange={(e) => setJobtitle(e.target.value)}
            />
          </div> */}
          <div className="row w-100 d-flex justify-content-center">
            <div className="col-8 input pe-0">
              <div class="input-group mb-3">
                <input
                  className="form-control me-0"
                  type="text"
                  placeholder="Job Title..."
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
                <span
                  class="input-group-text"
                  id="basic-addon2"
                  onClick={() => HandleSkills()}
                >
                  Search
                </span>
              </div>
            </div>
            <div className="col-8 input d-flex px-4 flex-wrap">
              {skills.map((items, i) => (
                <p className="skills">
                  {items} <span onClick={() => handleDelete(i)}>x</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row content d-flex justify-content-start px-3 gap-5 py-2">
        {row.length >= 1 ? (
          row.map((item) => (
            <div className="col-3 cards">
              <div className="row">
                <div className="col-3">
                  <img
                    src={`http://localhost:5000/${item.user.profile.slice(7)}`}
                    alt={item.title}
                    width={"100%"}
                    height={60}
                  />
                </div>
                <div className="col-8 company">{item.user.username}</div>
              </div>
              <div className="Description row">
                <div className="col-12">
                  <h4>{item.title}</h4>
                </div>
                <div className="col-12 pb-2">
                  Salary: <span>{item.salary}</span>
                </div>
                <div className="col-12 input d-flex flex-wrap">
                  {item.skills[0].split(",").map((item, i) => (
                    <p className="skills">
                      {item.length > 10 ? item.substring(0, 10) + "..." : item}
                    </p>
                  ))}
                </div>
                <hr className="px-2" />
                <div className="col-6">
                  <p>
                    Posted: {days(new Date(Date.parse(item.createdAt)), date_2)}{" "}
                    days ago
                  </p>
                </div>
                <div className="col-6 apply">
                  <Link
                    to={`/finddetail/${item._id}`}
                    params={{
                      id: item._id,
                    }}
                  >
                    {" "}
                    <button>Apply</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Not found...</h1>
        )}
      </div>
    </div>
  );
}

export default FindaJob;
