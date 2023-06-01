import { createSlice } from "@reduxjs/toolkit";
import { GetAllTournaments } from "../thunks/state-thunks/tournaments/Touranaments";

const TournamentSlice = createSlice({
    name: "Tournaments",
    initialState : {
        data: [] ,  
    },
    reducers : {},
    extraReducers(builder) { 
        builder.addCase(GetAllTournaments.fulfilled, (state,action) => { 
            const data = action.payload;
           
            state.data.push(...data) ; 
           
        }); 

    }
});

export const TournamentsReducer = TournamentSlice.reducer; 