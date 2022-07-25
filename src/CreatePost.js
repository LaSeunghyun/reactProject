import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from './test'

function CreatePost(){
    const [text, setText] = useState({
        idx : '',
        title : '',
        content : ''
    }, [])
    const post = useSelector( (state) => state.post.value )

    useEffect( () => {
        setText(post)
    },[])
    
    const dispatch = useDispatch();
    let result = [...post]
    const num = result.length+1;

    const handleChange = (e) => {
        e.preventDefault();
        const postName = e.target.getAttribute('name');
        const postValue = e.target.value;
        const newPost = {...text};
        newPost[postName] = postValue;
        setText(newPost);
    }

    const handleAddPost = (e) => {
        e.preventDefault();
        dispatch(
            addPost({
                idx : num,
                title : text.title,
                content : text.content
            })
        )
    }

    return (
        <div>
            <form onSubmit={handleAddPost}>
                <p> IDX : { num }</p>
                <p> TITLE : <input type="text" name="title" onChange={ handleChange }></input> </p>
                <p> CONTENT : <textarea name="content" onChange={ handleChange }></textarea> </p>
                <button type='submit'>추가하기</button>
            </form>
        </div>
    )

}
export default CreatePost;