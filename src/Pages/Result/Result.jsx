/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import "./Result.css";
import { useSelector } from "react-redux";
import { showSR } from "../../features/srSlice";
import Histogram_Chart from "../../Components/Histogram_Chart/Histogram_Chart";
import Pie_Chart from "../../Components/Pie_Chart/Pie_Chart";
import { JSONTOCSV } from "../../Components/DataToCsv/DataToCsv";
import { AiOutlineDownload } from "react-icons/ai";
import Loading from "../../Components/Loading/Loading";
function Result() {
  const { srList, status } = useSelector(showSR);
  const [charts, setCharts] = useState(true);
  const DownloadCsv = () => {
    const Name = srList.map((item, i) => item.Name.map((items) => items));
    const Scores = srList.map((item, i) => item.Scores.map((items) => items));
    const Rank = srList.map((item, i) => item.Rank.map((items) => items));
    var data = [];
    for (var i = 0; i < Name[0].length; i++) {
      data = [
        ...data,
        { Name: Name[0][i], Scores: Scores[0][i], Rank: Rank[0][i] },
      ];
    }
    JSONTOCSV(data, "List.csv");
  };

  return (
    <>
      {status === "LoadingAdd" ? (
        <Loading loading='Comparing Data...' />
      ) : (
        <div className="container-fluid bg-color-result">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Top 10 Candidates</h1>
              </div>
              <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Score</th>
                          <th>Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        {srList.map((items) =>
                          items.Scores.slice(0, 10).map((item, i) => {
                            return (
                              <tr key={i}>
                                <td>{i}</td>
                                <td>{items.Name[i].slice(0, -4)}</td>
                                <td>{item.toFixed(2)}</td>
                                <td>{items.Rank[i]}</td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {srList.length > 0 && (
                <div className="col-lg-12 d-flex align-items-start align-items-md-center justify-content-center pt-1 pb-3 my-5 chartsBox flex-column">
                  <div className="pb-3">
                    <h1>Data Visualization</h1>
                  </div>
                  <div className="buttonBox d-flex flex-column">
                    <button className="charts" onClick={() => setCharts(true)}>
                      H
                    </button>
                    <button className="charts" onClick={() => setCharts(false)}>
                      P
                    </button>
                  </div>
                  <div className="row  d-flex align-items-center justify-content-start justify-content-md-center scroll">
                    <div className="col-lg-12 ">
                      {charts ? <Histogram_Chart /> : <Pie_Chart />}
                    </div>
                  </div>
                </div>
              )}

              <div className="col-lg-12 d-flex justify-content-center flex-column">
                <h1>Complete Candidate Ranks </h1>
                <div className="row d-flex justify-content-center ">
                  <div className="col-lg-5 d-flex justify-content-center ">
                    <button className="Download" onClick={() => DownloadCsv()}>
                      {" "}
                      <AiOutlineDownload className="AiOutlineDownload" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
