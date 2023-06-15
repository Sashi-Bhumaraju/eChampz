import { createSlice } from "@reduxjs/toolkit";
import { GetAllGames } from "../thunks/state-thunks/games/games";
import { enableMapSet } from 'immer';
enableMapSet();

const GamesSlice = createSlice({
    name: "games",
    initialState : {
        allGames: [] ,  
    },
    reducers : {},
    extraReducers(builder) { 
        builder.addCase(GetAllGames.fulfilled, (state,action) => { 
            const data = action.payload;
            state.allGames= data ; 
        }); 
    }
});

export const GamesReducer = GamesSlice.reducer; 