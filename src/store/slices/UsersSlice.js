import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
    name: "user",
    initialState : {
        data : []
    },
    reducers : {},

});

export const UsersReducer = UsersSlice.reducer;
