import React from "react";
const MyPdfViewer = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <object
        width="100%"
        height="600"
        data={`http://localhost:5000/${props.pdf.slice(7)}`}
        type="application/pdf"
      >
        {" "}
      </object>
    </div>
  );
};

export default MyPdfViewer;
