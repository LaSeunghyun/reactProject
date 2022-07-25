import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { test } from './test'
import Button from "react-bootstrap/Button";
import CreatePost from './CreatePost'

function Btn() {
  const [reset, setReset] = useState([]);
  const [post, setPost] = useState([]);
  const dispatch = useDispatch();
  const st = useSelector( (state) => state.post.value)

  useEffect( () => {
    setReset(st)
  }, [])


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
  function ageSort(st){
    let ageSort = [...st];
    return ageSort.sort((a, b) => a.age - b.age)
  }
  function reflash(){
    return reset;
  }

  return (
    <div>
      <Button className="m-2" onClick={() => {
        dispatch(
          test( upSort(st) )
          )
      }}>오름차순 정렬</Button>
      <Button className="m-2" onClick={() => {
        dispatch(
          test( downSort(st) )
          )
      }}>내림차순 정렬</Button>
      <Button className="m-2" onClick={() => {
        dispatch(
          test( nameSort(st) )
          )
      }}>이름순 정렬</Button>
      <Button className="m-2" onClick={() => {
        dispatch(
          test( ageSort(st) )
          )
      }}>나이순 정렬</Button>
      <Button className="m-2" onClick={() => {
        dispatch(
          test( reflash() )
          )
      }}>초기화</Button>
      <Button className="m-2" onClick={() => {
        setPost(true)
      }}>추가</Button>
      {post === true ? <CreatePost /> : null}
    </div>
  );
}

export default Btn;
