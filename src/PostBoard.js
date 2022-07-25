import React from "react";
import './App.css';
import { useSelector } from 'react-redux'

function PostBoard() {
  const sdf = useSelector((state) => state.post.value);
  console.log(sdf)
  return (
    <div className="container">
      <div className="row">
        { sdf.map((a, index) =>
          <div className="col-lg-2 colNum m-2">
            <p>인덱스 : { index + 1 }</p>
            <p>idx : { a.idx }</p>
            <p>이름 : { a.name }</p>
            <p>나이 : { a.age }</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostBoard;
