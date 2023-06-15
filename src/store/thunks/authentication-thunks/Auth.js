import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../firebase-config";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc, refEqual, getDoc  } from "firebase/firestore";
import { useDispatch } from "react-redux";
import UseThunk from "../../../hooks/UseThunk";
import User from "../../../model/User";
const userDataCollectionRef = collection(db,'user'); 


const LoginUser = createAsyncThunk('user/login', async (credentials) => {
    const response =  await signInWithEmailAndPassword(auth, credentials.email, credentials.pass).then(cred=>{
        console.log(cred.user.uid)
        return {email:cred.user.uid}
    });
    return response;
});

const SignupUser = createAsyncThunk('user/signup', async (user) => {
    const response =  await createUserWithEmailAndPassword(auth, user.email, user.password).then( async cred =>{
        const ref = doc(db, "user", cred.user.uid);
        const userRef = {
            "email": user.email,
            "bio": "",
            "verified": false,
            "dob": new Date(user.dob),
            "gender": user.gender,
            "name": user.name,
            "profilePic": "",
            "phone": "",
            "conductedTournaments": [],
            "invitedTournaments": [],
            "myTournaments": []
        }
        
        await setDoc(ref, userRef);
        return {result:true};
    });
    return response;
});

const GetUser = createAsyncThunk('user/get', async (uid) => {
    // console.log("this is getting data freom firebase")
   
    const docRef = doc(db, "user", uid); 
    const response = await getDoc(docRef).then((docSnap)=>{

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const data = docSnap.data();
            return {...data, uid : uid};
          } else {
            console.log("No such document!");
          }

         return docSnap.data(); 

    }) .catch(()=>{ console.log("error")})
    return response;
});

export { LoginUser, SignupUser, GetUser };
