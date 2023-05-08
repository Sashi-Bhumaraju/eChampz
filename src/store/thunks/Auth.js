import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../firebase-config";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const LoginUser = createAsyncThunk('user/login', async (credentials) => {
    const response =  await signInWithEmailAndPassword(auth, credentials.email, credentials.pass).then(cred=>{
        console.log(cred.user.uid)
        return {email:cred.user.uid}
    });
    return response;
});

const SignupUser = createAsyncThunk('user/login', async (credentials) => {
    const response =  await createUserWithEmailAndPassword(auth, credentials.email, credentials.pass).then(cred=>{
        return db.collection('user').doc(cred.user.uid).set({
                email: credentials.email,
                dob : credentials.dob,
                bio: "",
                gender: credentials.gender,
                name: credentials.username,
                profileUrl: "",
                phone:"",
                credentials: [],
                credentials: [],
                teamInvites: []
        })
    });
    return response;
});

export { LoginUser, SignupUser };
