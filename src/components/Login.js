import React, { useEffect, useState} from "react";
import UseInputState from "../hooks/UseInputState";
import { validateEmail } from "../util/Validatation";
import UseModal from "../hooks/UseModal";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../store/thunks/Auth";
import CircularBar from "./CircularBar";

function Login (props) {
    const [err, seterr] = useState(" - Invalid user or password");
    const [username, handleUsername, resetUsername] = UseInputState("");
    const [passowrd, handlePasssword, resetPassword] = UseInputState("");
    const EMAIL = "email";
    const USERNAME = "username";

    const dispatch = useDispatch();
    const {isLoading, data, error } = useSelector((state)=> {
         return state.user
    })

    const getLoginType = () => {
        if(  validateEmail(username) ) {
            return EMAIL;
        } else {
            return USERNAME;
        }
    }

    

    const handleSubmit = (event) => {
      event.preventDefault();
      if( getLoginType() === EMAIL) {
           dispatch(LoginUser({email:username.trim(),pass:passowrd.trim()}));
      } else if( getLoginType() === USERNAME) {
            //  username and password login
      }
    }

    return (
        <div className="login">
            <div className="app-name">eChampz!</div>
            <div className="header">
                <div className="sub-text"><b> Login now</b> </div>
            </div>
            <form  className="login-form" onSubmit={handleSubmit}>
                <div  className="username">Email or username {error?  <i  style={{color:"tomato"}}>{err}</i> :'' } </div>
                    <input required autoComplete="off" type="text" value={username} onChange={handleUsername}></input>
                <div className="password">Password {error?  <i  style={{color:"tomato"}}>{err}</i> :'' } </div>
                    <input  required autoComplete="new-password" type="password" value={passowrd} onChange={handlePasssword}></input>
                <div className="forgot-password">Forgot password?</div>
                <button className="submit" type="submit">{ isLoading?  <CircularBar size={"var(--big)"} stroke={2}></CircularBar> : "Login"}</button>
            </form>
            <div className="new-account">Need an account? <span onClick={()=>{props.tooglePage(false)}} className="new-register"><b className="new-register"> Register</b></span></div>
            {/* <button disabled={isLoading} onClick={()=>{showModal()}} > show</button> */}
        </div>
       
    )
}

export default Login;