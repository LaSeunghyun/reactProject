import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { test } from './test'
import Button from "react-bootstrap/Button";

function Btn() {
  const dispatch = useDispatch();
  const st = useSelector( (state) => state.post.value)

  function upSort(st){
    let upSort = [...st];
    return upSort.sort((a, b) => a.idx - b.idx)
  }
  function downSort(st){
    let downSort = [...st];
    return downSort.sort((a, b) => b.idx - a.idx)
  }
  function nameSort(st){
    let nameSort = [...st];
    return nameSort.sort((a, b) => {
      if(a.name > b.name) return 1
      else if(a.name < b.name) return -1
      else return 0
    })
  }

  return (
    <div>
      <Button onClick={() => {
        dispatch(
          test( upSort(st) )
          )
      }}>오름차순 정렬</Button>
      <Button onClick={() => {
        dispatch(
          test( downSort(st) )
          )
      }}>내림차순 정렬</Button>
      
      <Button onClick={() => {
        dispatch(
          test( nameSort(st) )
          )
      }}>이름순 정렬</Button>
    </div>
  );
}

export default Btn;
