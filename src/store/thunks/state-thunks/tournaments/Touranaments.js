import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { createAsyncThunk } from "@reduxjs/toolkit";


const GetAllTournaments = createAsyncThunk('tournaments/get', async () => {
    
    const response = await getDocs(collection(db, "tournaments")).then((querySnapshot)=>{
           return querySnapshot.docs.map((doc) =>{ 
            return {...doc.data(), tid: doc.id }
          });
    }).catch((err)=>err)

    return response;
});

const GetTournamentById = createAsyncThunk('tournament/get', async (tid) => {

    const ref = doc(db, "tournaments", tid)
    const response = await getDoc(ref).then((docSnap)=>{
           if (docSnap.exists()) {
              return docSnap.data();
           } else {
              return null;
           }
        }).catch((err)=>err)
    return response;
    
});

export {GetAllTournaments,GetTournamentById};