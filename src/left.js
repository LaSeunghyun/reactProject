import React from "react";
import { useSelector } from 'react-redux'

function Left() {
  const sdf = useSelector((state) => state.user.value);
  console.log('user : ' + sdf)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          { sdf.title }
          { sdf.content }
        </div>
      </div>
    </div>
  );
}

export default Left;
