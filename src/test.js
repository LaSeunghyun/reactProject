import React from "react";
import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name: "post",
    initialState: {
        value:[
            {
                idx : 1,
                title : 'z',
                content : 30
            },
            {
                idx : 2,
                title : 'a',
                content : 21
            },
            {
                idx : 3,
                title : 'ㄱ',
                content : 26
            },
            {
                idx : 4,
                title : 'ㄹ',
                content : 48
            },

        ]
    },
    reducers: {
        test: (state, action) => {
            state.value = action.payload
        },
        addPost: (state, action) => {
            console.log(action.payload)
            state.value.push(action.payload)
        }
    }
});


export const { test, addPost } = testSlice.actions;
export default testSlice.reducer;