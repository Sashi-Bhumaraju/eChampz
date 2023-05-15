import React, { useEffect, useState} from "react";
import UseInputState from "../hooks/UseInputState";
import { validateEmail } from "../util/Validatation";
import { LoginUser,GetUser } from "../store/index";
import UseThunk from "../hooks/UseThunk";
import CircularBar from "./CircularBar";
import { useSelector } from "react-redux";
import { auth } from "../store/firebase-config";
import { Navigate, useNavigate } from "react-router-dom";



function Login (props) {

    const [err, seterr] = useState(" - Invalid user or password");
    const [username, handleUsername, resetUsername] = UseInputState("");
    const [passowrd, handlePasssword, resetPassword] = UseInputState("");
    const [loginUser, loginData,loginLoading, loginError] = UseThunk(LoginUser);
    const [runGetUser,userData,userDataLaoding,userDataError] = UseThunk(GetUser);
    const navigate = useNavigate();
       
   

    const EMAIL = "email";
    const USERNAME = "username";

    const user = useSelector((state)=>{
        return state.user.data;
    })


    const getLoginType = () => {
        if(  validateEmail(username) ) { return EMAIL;} 
        else { return USERNAME; }
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();
        if( getLoginType() === EMAIL) { loginUser({email:username.trim(),pass:passowrd.trim()}); }
        else if( getLoginType() === USERNAME) {  }
    }

    const goToSignup = () => {
        navigate("/signup");
    }

    useEffect(()=>{
        // console.log("userid:",auth?.currentUser?.uid)
        console.log(auth.currentUser?.uid,"sasiiiiiiiii ")
        runGetUser(auth.currentUser?.uid);
    },[loginData])

    return (
        <div className="auth-container">
            {JSON.stringify(user)}
            <div className="auth">
                <div className="login">
                    <div className="app-name">eChampz!</div>

                        <div className="header">
                            <div className="sub-text"><b> Login now</b> </div>
                        </div>

                        <form  className="login-form" onSubmit={handleSubmit}>
                            <div  className="username">Email or username {loginError?  <i  style={{color:"tomato"}}>{err}</i> :'' } </div>
                                <input required autoComplete="off" type="text" value={username} onChange={handleUsername}></input>
                            <div className="password">Password {loginError?  <i  style={{color:"tomato"}}>{err}</i> :'' } </div>
                                <input  required autoComplete="new-password" type="password" value={passowrd} onChange={handlePasssword}></input>
                            {/* <button disabled={loginLoading || userDataLaoding}  className="forgot-password">Forgot password?</button> */}
                            <button disabled={loginLoading || userDataLaoding} className="submit" type="submit">{ loginLoading || userDataLaoding?  <CircularBar size={"var(--big)"} stroke={2}></CircularBar> : "Login"}</button>
                        </form>

                        <div  className="new-account">Need an account? <button disabled={loginLoading || userDataLaoding} onClick={()=>{goToSignup()}} className="new-register"><b className="new-register"> Register</b></button></div>
                        {/* <button disabled={isLoading} onClick={()=>{showModal()}} > show</button> */}
                </div>
            </div>
        </div>
    )
}

export default Login;