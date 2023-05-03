import React, {useState} from "react";
import UseInputState from "../hooks/UseInputState";
import { FcNext, FcPrevious } from "react-icons/fc";
import { validateEmail, validatePassword } from "../util/Validatation";
import  SigninByEmail  from "../store/authentication-api/Signin"

function Login (props) {
    const [error, setError] = useState("");
    const [username, handleUsername, resetUsername] = UseInputState("");
    const [passowrd, handlePasssword, resetPassword] = UseInputState("");
    const EMAIL = "email";
    const USERNAME = "username";


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
            //  email and password login
           var result =  SigninByEmail(username,passowrd)
           console.log(JSON.stringify( result))
           
      } else if( getLoginType() === USERNAME) {
            //  username and password login
      }
    }
   
    
    // return null;
    return (
        <div className="login">
            <div className="app-name">eChampz!</div>
            <div className="header">
                {/* <div className="heading">Welcome!</div> */}
                <div className="sub-text"><b> Login now</b> </div>
            </div>
            <form  className="login-form" onSubmit={handleSubmit}>
                <div  className="username">Email or username <i  style={{color:"orange"}}>{error}</i> </div>
                    <input required autoComplete="off" type="text" value={username} onChange={handleUsername}></input>
                <div className="password">Password <i  style={{color:"orange"}}>{error}</i></div>
                    <input  required autoComplete="new-password" type="password" value={passowrd} onChange={handlePasssword}></input>
                <div className="forgot-password">Forgot password?</div>
                <button className="submit" type="submit">Login</button>
            </form>
            <div className="new-account">Need an account? <span onClick={()=>{props.tooglePage(false)}} className="new-register"><b className="new-register">Register</b></span></div>
        </div>
    )
}

export default Login;