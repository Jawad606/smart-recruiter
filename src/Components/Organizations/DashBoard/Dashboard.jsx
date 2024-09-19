import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { LineChart, BarChart } from "reaviz";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobAvertize,
  showJobAvertize,
} from "../../../features/JobAdvertize";
import { fetchapplied, showList } from "../../../features/appliedSlice";
function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobAvertize());
    dispatch(fetchapplied());
  }, [dispatch]);
  const user = JSON.parse(localStorage.getItem("Data"));
  const { JobAvertizeList } = useSelector(showJobAvertize);
  const { applied } = useSelector(showList);
  const [jobID, setJobId] = useState("");
  const [data, setData] = useState([]);
  const list_Job = JobAvertizeList.filter(
    (item) => item.user._id === user._id
  ).map((item) => item._id);

  useEffect(() => {
    function countApplicationsPerDay(applicationsArray) {
      // Create an empty object to store the counts
      let counts = {};
      let array = [];
      // Loop through the array and count the applications for each date
      for (let i = 0; i < applicationsArray.length; i++) {
        let date = new Intl.DateTimeFormat("en-US", {
          dateStyle: "short",
        }).format(new Date(Date.parse(applicationsArray[i].createdAt)));

        if (counts[date]) {
          counts[date].data++;
        } else {
          counts[date] = {
            data: 1,
            key: date,
          };
          array.push(counts[date]);
        }
      }

      // Return an object with the counts and the number of unique dates
      return array;
    }
    setData(
      countApplicationsPerDay(applied.filter((item) => item.Job.match(jobID)))
    );
  }, [applied, jobID]);

  return (
    <div className="col-10 dashboard zIndex-3">
      <div className="container-fluid">
        <div className="row py-4 d-flex justify-content-center">
          <div className="col-6 d-flex justify-content-center text-center  shadow-lg p-3  mb-3 bg-body-tertiary rounded">
            <div className="col-11 card ">
              <h3 className="py-2">Job Advertized</h3>
              <h2 className="py-2">
                {
                  JobAvertizeList.filter((item) => item.user._id === user._id)
                    .length
                }
              </h2>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center text-center  shadow-lg p-3  mb-3 bg-body-tertiary rounded">
            <div className="col-11 card">
              <h3 className="py-2">Total Candidate</h3>
              <h2 className="py-2">
                {applied.filter((item) => list_Job.includes(item.Job)).length}
              </h2>
            </div>
          </div>
        </div>

        <div className="row py-4  gap-3 ">
          <div className="col-12 d-flex flex-column  gap-4 align-items-center justify-content-center text-center  shadow-lg p-3  mb-5 bg-body-tertiary rounded">
            <div className="col-5 card input">
              <select
                className="m-0"
                name=""
                id=""
                onChange={(e) => setJobId(e.target.value)}
              >
                <option value="">All</option>
                {JobAvertizeList.filter((item) => item.user._id === user._id).map((item) => {
                  return <option value={item._id}>{item.title}</option>;
                })}
              </select>
            </div>
            <div className="col-11">
              <BarChart height={300} width={"100%"} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
