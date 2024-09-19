import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchResume, showResume } from "../../../features/resumeSlice";
import "./cv.css";
import MyPdfViewer from "./MyDocument";
function CV() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResume());
  }, [dispatch]);
  const location = useLocation();
  const { id } = useParams();
  const { resumeList } = useSelector(showResume);
  console.log(id,location.state.id)
  const cv = resumeList.filter(
    (item) => item.user._id === id && location.state.id === item._id
  );
  return (
    <div className="col-10 cv">
      <div className="container">
        {cv.map((item) => (
          <div className="row d-flex justify-content-center">
            <div className="col-7 pt-4">
              <MyPdfViewer pdf={item.resume} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CV;
