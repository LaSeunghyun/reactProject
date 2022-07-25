import React, { useEffect, useState } from "react";
import './App.css';
import { useSelector } from 'react-redux'

function PostBoard() {
  const sdf = useSelector((state) => state.post.value);

  return (
    <div className="container">
      <div className="row">
        { sdf.map((a, index) =>
          <div className="col-lg-10 colNum m-1">
            <p>NO : { index + 1 }</p>
            <p>IDX : { a.idx }</p>
            <p>TITLE : { a.title }</p>
            <p>CONTENT : { a.content }</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostBoard;
