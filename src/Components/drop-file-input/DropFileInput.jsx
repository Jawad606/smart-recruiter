import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./drop-file-input.css";

import { ImageConfig } from "./ImageConfig";
import uploadImg from "./assets/cloud-upload-regular-240.png";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);
  const [resumeList, setResumeList] = useState([]);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };
  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };
  const onDragEnterRe = () => wrapperRef.current.classList.add("dragover");
  const onDragLeaveRe = () => wrapperRef.current.classList.remove("dragover");
  const onDropRe = () => wrapperRef.current.classList.remove("dragover");
  const onFileDropRe = (e) => {
    const newFiles = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      if (newFiles) {
        setResumeList([...resumeList, e.target.files[i]]);
      }

    }
  };
  const fileRemoveRe = (file) => {
    const updatedList = [...resumeList];
    updatedList.splice(resumeList.indexOf(file), 1);
    setResumeList(updatedList);
    props.onFileChange(updatedList);
  };

  console.log(resumeList.length);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6  d-flex justify-content-center">
              <div
                ref={wrapperRef}
                className="drop-file-input "
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
              >
                <div className="drop-file-input__label">
                  <img src={uploadImg} alt="" />
                  <p>Drag & Drop your Job describtion here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} />
              </div>
              {fileList.length > 0 ? (
                <div className="drop-file-preview">
                  <p className="drop-file-preview__title">Ready to upload</p>
                  {fileList.map((item, index) => (
                    <div key={index} className="drop-file-preview__item">
                      <img
                        src={
                          ImageConfig[item.type.split("/")[1]] ||
                          ImageConfig["default"]
                        }
                        alt=""
                      />
                      <div className="drop-file-preview__item__info">
                        <p>{item.name}</p>
                        <p>{item.size}B</p>
                      </div>
                      <span
                        className="drop-file-preview__item__del"
                        onClick={() => fileRemove(item)}
                      >
                        x
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnterRe}
          onDragLeave={onDragLeaveRe}
          onDrop={onDropRe}
        >
          <div className="drop-file-input__label">
            <img src={uploadImg} alt="" />
            <p>Drag & Drop your Resumes here</p>
          </div>
          <input type="file" value="" onChange={onFileDropRe} multiple />
        </div>
        {resumeList.length > 0 ? (
          <div className="drop-file-preview">
            <p className="drop-file-preview__title">Ready to upload</p>
            {resumeList.map((item, index) => (
              <div key={index} className="drop-file-preview__item">
                {/* <img
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              /> */}
                <div className="drop-file-preview__item__info">
                  <p>{item.name}</p>
                </div>
                <span
                  className="drop-file-preview__item__del"
                  onClick={() => fileRemoveRe(item)}
                >
                  x
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
