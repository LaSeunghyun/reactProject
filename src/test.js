import React from "react";
import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name: "post",
    initialState: {
        value:[
            {
                idx : 1,
                name : 'z',
                age : 30
            },
            {
                idx : 2,
                name : 'a',
                age : 21
            },
            {
                idx : 3,
                name : 'ㄱ',
                age : 26
            },
            {
                idx : 4,
                name : 'ㄹ',
                age : 48
            },

        ]
    },
    reducers: {
        test: (state, action) => {
            state.value = action.payload
        },
        
        reset: (state, action) => {
            state.value = action.initialState
        }
    },
});


export const { test } = testSlice.actions;
export default testSlice.reducer;