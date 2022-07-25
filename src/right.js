import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { test } from './test'
import Button from "react-bootstrap/Button";

function Right() {
  const dispatch = useDispatch();
  const st = useSelector( (state) => state.user.value)

  let titl = '';
  let conten = '';
  if(st.title === '벌써?'){
    titl = '졸리다'
    conten = '시간이 이렇게?'
  }else{
    titl = '벌써?'
    conten = '20'
  }

  return (
    <div>
      <Button onClick={() => {
        dispatch(
          test({
            title: titl, content: conten
          })
          )
      }}>Login</Button>
    </div>
  );
}

export default Right;
