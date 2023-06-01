import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";


const GetAllTournaments = createAsyncThunk('tournaments/get', async () => {
    
    const response = await getDocs(collection(db, "tournaments")).then((querySnapshot)=>{
           return querySnapshot.docs.map((doc) => doc.data());
    }).catch((err)=>err)
 console.log(response)
    return response;
});

const GetTournament = createAsyncThunk('tournament/get', async (tid) => {
    const ref = doc(db, "tournaments", tid)
    const response = await getDocs(ref).then((docSnap)=>{
           if (docSnap.exists()) {
             return docSnap.data();
          } else {
            return null;
          }
    }).catch((err)=>err)

    return response;
});

export {GetAllTournaments,GetTournament};