import React from "react";
import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name: "user",
    initialState: {
        value:{
            title: "벌써?", content: "시간이 이렇게?"
        }
    },
    reducers: {
        test: (state, action) => {
            state.value = action.payload
        },
    },
});


export const { test } = testSlice.actions;
export default testSlice.reducer;