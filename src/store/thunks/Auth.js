import { createAsyncThunk } from "@reduxjs/toolkit";
import  SigninByEmail  from "../authentication-api/Signin"
import { auth } from "../firebase-config";
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
        console.log(cred.user.uid)
        return {email:cred.user.uid}
    });
    return response;
});

export { LoginUser, SignupUser };
