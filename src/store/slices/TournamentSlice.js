import { createSlice } from "@reduxjs/toolkit";
import { GetAllTournaments, GetTournamentById } from "../thunks/state-thunks/tournaments/Touranaments";
import { enableMapSet } from 'immer';
enableMapSet();

const TournamentSlice = createSlice({
    name: "Tournaments",
    initialState : {
        allTournaments: [] ,  
        allDetailedTournaments: new Map(),
    },
    reducers : {},
    extraReducers(builder) { 
        builder.addCase(GetAllTournaments.fulfilled, (state,action) => { 
            const data = action.payload;
           
            state.allTournaments.push(...data) ; 
            state.allDetailedTournaments.set(data.tid,data); 
           
        }); 

        builder.addCase(GetTournamentById.fulfilled, (state,action) => { 
            const data = action.payload;
            state.allDetailedTournaments.set(data.tid,data); 
           
        }); 

    }
});

export const TournamentsReducer = TournamentSlice.reducer; 