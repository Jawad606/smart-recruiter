import React from "react";
import ReactLoading from 'react-loading';
function Loading({loading}) {
  const type='spin'
  const color='#F66B0E'
  return (
    <div className='d-flex justify-content-center bg-color-spin align-items-center flex-column'>
      <ReactLoading className="d-flex" type={type} color={color} width={113} />
      <h1>{loading}</h1>
    </div>
  );
}

export default Loading;
