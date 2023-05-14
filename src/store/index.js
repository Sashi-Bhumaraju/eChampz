import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./slices/UsersSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customMiddleWare = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer : {
        user  : UsersReducer
    },

    middleware: (getDefaultMiddleware) => customMiddleWare,
});

export * from './thunks/authentication-thunks/Auth';
export * from './thunks/validation-thunks/Validation';