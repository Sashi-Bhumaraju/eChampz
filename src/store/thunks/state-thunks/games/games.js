import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";


const GetAllGames = createAsyncThunk('games/get', async () => {
    
    const response = await getDocs(collection(db, "games")).then((querySnapshot)=>{
           return querySnapshot.docs.map((doc) =>{ 
            return {...doc.data(), gid: doc.id }
          });
    }).catch((err)=>err)

    return response;
});

export { GetAllGames }