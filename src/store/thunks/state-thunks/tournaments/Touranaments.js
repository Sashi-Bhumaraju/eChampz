import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";


const GetAllTournaments = createAsyncThunk('tournaments/get', async () => {
    
    const response = await getDocs(collection(db, "tournaments")).then((querySnapshot)=>{
           return querySnapshot.docs.map((doc) => doc.data());
    }).catch((err)=>err)

    return response;
});

export {GetAllTournaments};
