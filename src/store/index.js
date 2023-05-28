import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./slices/UsersSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { GetAllTournaments } from "./thunks/state-thunks/tournaments/Touranaments";
import { TournamentsReducer } from "./slices/TournamentSlice";

const customMiddleWare = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer : {
        user  : UsersReducer,
        tournaments : TournamentsReducer
    },

    middleware: (getDefaultMiddleware) => customMiddleWare,
});

export * from './thunks/authentication-thunks/Auth';
export * from './thunks/validation-thunks/Validation';
export * from './thunks/state-thunks/tournaments/Touranaments'; 
