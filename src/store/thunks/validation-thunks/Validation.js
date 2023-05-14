import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase-config";
import {
    collection,
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc,
    doc,
    query,
    where
} from 'firebase/firestore';

const FOUND = 'found';
const NOT_FOUND = 'notFound'
const userDataCollectionRef = collection(db,'user'); 

const EmailExists = createAsyncThunk('email/exists', async (email) => { 
    const filteredUsersQuery = query(userDataCollectionRef, where("email", "==", email)); 
    const response =  await  getDocs(filteredUsersQuery) 
    .then((querySnapshot) => { 
        console.log(querySnapshot.docs) 
      if ( querySnapshot.docs.length == 0) { return NOT_FOUND} else { return FOUND; } 
    }) 
    // .error((error)=>{ return error}) 
    return response; 
}); 

const UsernameExists = createAsyncThunk('username/exists', async (username) => { 
    const filteredUsersQuery = query(userDataCollectionRef, where("name", "==", username)); 
    const response =  await  getDocs(filteredUsersQuery) 
    .then((querySnapshot) => { 
        console.log(querySnapshot.docs)  
      if ( querySnapshot.docs.length == 0) { return NOT_FOUND } else { return FOUND; } 
    }) 
    // .error((error)=>{ return error}) 
    return response;  
});


export { EmailExists, UsernameExists }
