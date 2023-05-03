import React, {useState} from "react";
import UseInputState from "../hooks/UseInputState";
import { FcNext, FcPrevious } from "react-icons/fc";

function Signup (props) {
    const [step, setStep] = useState(1);
    const [email, setEmail, resetEmail] = UseInputState("");
    const [password, setPassword, resetPassword] = UseInputState("");
    const [username, setUsername,  resetUsername] = UseInputState("");
    const [selectedDate, setSelectedDate, resetSelectedDate] = UseInputState(new Date().toISOString().substring(0,10));
    const today = new Date().toISOString().substring(0,10);

    const nextStep = () => {
       if (step != 4) setStep(step + 1);
    }
    
    const prevStep = () => {
       if(step != 1) setStep( step - 1);
    } 

    const renderedElement = () => {
        switch(step) {
            case 1: return <> <div className="username" >Email </div>
                              <input type="text" value={email} onChange={setEmail}  ></input> </>;

            case 2: return <> <div className="username" >Username </div>
                          <input type="text"  value={username} onChange={setUsername}  ></input></>;

            case 3: return <> <div className="username" >Date of birth </div>
                       <input type="date" onChange={(value)=>setSelectedDate(value)} value={selectedDate} min="1980-01-01" max={new Date().toISOString().substring(0,10)} ></input></>;

            case 4: return <><div className="password" >Password </div>
                       <input type="password"  value={password} onChange={setPassword} ></input> <div className="submit" type="submit">Signup</div> </> ;
            default: return null
        }
    }
    
    return (
        <div className="Signup">
            
            <div className="app-name">eChampz!</div>
            <div className="header">
                {/* <div className="heading">Welcome!</div> */}
              
                <div className="sub-text"><b>Register now</b> </div>
            </div>
            <form className="Signup-form">
                 { renderedElement()}
            </form>
            <div className="step-nav">
               { step != 1? <div className="prev" onClick={prevStep}> <FcPrevious/>prev </div> : <div/>}
               { step != 4? <div className="next" onClick={nextStep}> next  <FcNext/> </div> : "" }
            </div>
            <div className="new-account">Already have an account? <span className="new-register" onClick={()=>{props.tooglePage(true)}}><b className="new-register">Login</b></span></div>
        </div>
    )
}

export default Signup;