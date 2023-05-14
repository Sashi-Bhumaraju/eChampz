import React, {useState} from "react";
import UseInputState from "../hooks/UseInputState";
import { FcNext, FcPrevious } from "react-icons/fc";
import UseSelect from "../hooks/UseSelect";
import { EmailExists, UsernameExists, SignupUser } from "../store";
import UseThunk from "../hooks/UseThunk";
import CircularBar from './CircularBar';
import { validateEmail, validateUsername, validateDateFor13Years, validatePassword } from "../util/Validatation";
import { FaEye, FaEyeSlash } from 'react-icons/fa';





function Signup (props) {

    // form state variables
    const [step, setStep] = useState(1);
    const [email, setEmail, resetEmail] = UseInputState("");
    const [password, setPassword, resetPassword] = UseInputState("");
    const [username, setUsername,  resetUsername] = UseInputState("");
    const [selectedDate, setSelectedDate, resetSelectedDate] = UseInputState(new Date().toISOString().substring(0,10));
    const [gender,SelectComponent] = UseSelect(["male","female","no mention"]); 
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [signupUser,signupData, signupLoading, signupError] = UseThunk(SignupUser);
    

    //  valid input errors hadle variables
    const [notValidEmail, setNotValidEmail] = useState(false); 
    const [notValidusername, setNotValidusername] = useState(false); 
    const [notValidDob, setNotValidDob] = useState(false);
    const [notValidGender, setnotValidGender] = useState(false);
    const [notValidPassword, setNotValidPassword] = useState(false);
   

    //  data base redundancy checking request call variables
    const [emailExistsOrNot, emaildata, emailloading, emailerror] = UseThunk( EmailExists );
    const [usernameExistsOrNot, usernamedata, usernameloading, usernameerror] = UseThunk( UsernameExists );
    

    //  data base state code if request is fulfilled
    const FOUND = 'found';
    const NOT_FOUND = 'notFound'
  
   
    const nextStep =  () => {
        switch(step) {
            case 1: { if(emaildata === NOT_FOUND && validateEmail(email)) setStep(step + 1); break; }
            case 2: { if(usernamedata === NOT_FOUND && validateUsername(username)) setStep(step + 1); break;}
            case 3: { if( validateDateFor13Years(selectedDate)) setStep(step + 1); break;}
            case 4: { validateInput(gender); setnotValidGender(false); if( gender !== null) setStep(step + 1); else setnotValidGender(true); break;}
            case 5: { validatePassword(password); setNotValidPassword(false); if( validatePassword(password) ) setStep(step + 1);  else setNotValidPassword(true); break;}
        }
    }
    
    const prevStep = () => {
       if(step != 1) setStep( step - 1);
    } 

    const validateInput =  (input) => {
        switch(step) {
            case 1 :{ 
                setNotValidEmail(false)
                if (validateEmail(input)) {  emailExistsOrNot(input);  }
                else { setNotValidEmail(true) }
                break;
            }
            case 2: { 
                setNotValidusername(false)
                if (validateUsername(input)) {  usernameExistsOrNot(input);  }
                else { setNotValidusername(true) }
                break;
            }
            case 3: {
                setNotValidDob(false)
                if (!validateDateFor13Years(input)) { setNotValidDob(true); }
                else { setNotValidDob(false) }
                break;
            }
            case 4: {
                if ( input !== null) { setnotValidGender(true); }
                else { setnotValidGender(false) }
                break;
            }
            case 5: {
                if ( input !== null) { setNotValidPassword(true); }
                else { setNotValidPassword(false) }
                break;
            }

        }
    }


    const inputState = (isLoading, data, error, onDataTrueText, onDataFalseText) => {
            if ( error ) return <i  style={{color:"tomato"}}>{"- error while loading data"}</i>;
            else if( isLoading ) return <CircularBar  size={"var(--ultra-small)"} stroke={2}></CircularBar> 
            else if( data === FOUND) return <i  style={{color:"tomato"}}>{" - "+onDataTrueText}</i>;
            else if ( data === NOT_FOUND){  return <i  style={{color:"#00ff04"}}>{" - "+onDataFalseText}</i>;}
    }


    const renderedElement = () => {

        switch(step) {
            case 1: return <> <div className="label" >Email &nbsp; { notValidEmail? <i  style={{color:"tomato"}}>{" - enter valid email"}</i> :  inputState(emailloading, emaildata, emailerror, 'email already exists', 'available')} </div>
                              <input type="email" value={email} onChange={(event)=>{ setEmail(event); validateInput(event.target.value); }}  ></input> </>;

            case 2: return <> <div className="label" >Username &nbsp; { notValidusername? <i  style={{color:"tomato"}}>{" - enter valid username"}</i> :  inputState(usernameloading, usernamedata, usernameerror, 'username already exists', 'available')} </div>
                              <input type="text"  value={username} onChange={(event)=>{ setUsername(event); console.log(notValidusername); validateInput(event.target.value);}} ></input> </>;

            case 3: return <> <div className="label" >Date of birth &nbsp; <i  style={{color:notValidDob?"tomato":"#00ff04"}}>{notValidDob?" - enter valid date of birth atleast 13 years":" "}</i></div>
                              <input type="datetime-local" onChange={(event)=>{setSelectedDate(event); validateInput(event.target.value)}} value={selectedDate} min="1980-01-01" max={new Date().toISOString().substring(0,10)} ></input></>;

            case 4: return <> <div className="label" >Gender &nbsp; <i  style={{color:notValidGender?"tomato":"#00ff04"}}>{notValidGender?" - select your gender":""}</i>  </div>
                                 {SelectComponent}</>;

            case 5: return <> <div className="label" >Password  &nbsp; <i  style={{color:notValidPassword?"tomato":"#00ff04"}}>{notValidPassword?" - password should contain 8 chars, 1 digit, 1 lowercase, 1 uppercase":""}</i>   </div>
                              <span className="password-input-box"> <input  type={isPasswordOpen ? 'text' : 'password'}  value={password} onChange={setPassword} ></input> <span className="password-input-box-icon" onClick={()=>setIsPasswordOpen(!isPasswordOpen)}>{isPasswordOpen? <FaEye/> : <FaEyeSlash/>}</span></span>  </> ;
            
            case 6 : return <> <div className="label"><i  style={{color:signupError?"tomato":"#00ff04"}}>{signupError?"error while creating account":signupData? "account created succesfully":""}</i></div> 
                               <button className="submit" disabled={signupLoading || signupData}  type="submit">{ signupLoading?  <CircularBar size={"var(--big)"} stroke={2}></CircularBar> : "SignUp"}</button></>

            default: return null
        }
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {name:username, email: email, password: password, gender: gender.value, dob: selectedDate}; 
        signupUser(user); 
      }
    

   
    return (
        <div className="auth-container">
            <div className="auth">
                <div className="Signup">
                    <div className="app-name">eChampz!</div>

                        <div className="header">
                            <div className="sub-text"><b>Register now</b> </div>
                        </div>

                        <form className="Signup-form" onSubmit={handleSubmit}>
                            { renderedElement()}
                        </form >

                        { (!signupData && !signupLoading ) && <div className="step-nav">
                            { step != 1?  <div className="prev" onClick={prevStep}> <FcPrevious/>prev </div> : <div/>}
                            { step != 6? <div className="next" onClick={nextStep}> next  <FcNext/> </div> : "" }
                            </div>}
                            
                        { (!signupData && !signupLoading ) && <div className="new-account">Already have an account? <span className="new-register" onClick={()=>{props.tooglePage(true)}}><b className="new-register">Login</b></span></div>}

                </div>
            </div>
        </div>
    )
}

export default Signup;  
