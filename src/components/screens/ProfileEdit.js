import { useSelector } from 'react-redux';
import UseInputState from '../../hooks/UseInputState';
import UseSelect from '../../hooks/UseSelect';
import { MdOutlineCancel } from 'react-icons/md'
import CircularBar from '../widgets/CircularBar';
import { useState } from 'react';
import UseThunk from '../../hooks/UseThunk';
import { EmailExists, UsernameExists } from '../../store';
import { validateDateFor13Years, validateEmail, validatePhone, validateUsername } from '../../util/Validatation';
import { useNavigate } from 'react-router-dom';
function ProfileEdit () {

    const user = useSelector((state)=>{
            return state.user.data;
    })

    const [step, setStep] = useState(1);

    const [email, setEmail, resetEmail] = UseInputState(user.email);
    const [phone, setPhone, resetPhone] = UseInputState(user.phone);
    const [bio, setBio] = useState(user.bio);
    const [selectedDate, setSelectedDate, resetSelectedDate] = UseInputState((user.dob));
    const [gender,SelectComponent] = UseSelect(["male","female","no mention"]); 

    const [bioChars, setBioChars] = useState(0);

    
    // const [password, setPassword, resetPassword] = UseInputState("");
    // const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    // const [signupUser,signupData, signupLoading, signupError] = UseThunk(SignupUser);

     //  data base redundancy checking request call variables
     const [emailExistsOrNot, emaildata, emailloading, emailerror] = UseThunk( EmailExists );
     const [usernameExistsOrNot, usernamedata, usernameloading, usernameerror] = UseThunk( UsernameExists );

     //  valid input errors hadle variables
     const [notValidEmail, setNotValidEmail] = useState(false); 
     const [notValidusername, setNotValidusername] = useState(false); 
     const [notValidDob, setNotValidDob] = useState(false);
     const [notValidGender, setnotValidGender] = useState(false);
     const [notValidPassword, setNotValidPassword] = useState(false);
     const [notValidPhone, setNotValidPhone] = useState(true);

     const navigate = useNavigate();
 
     //  data base state code if request is fulfilled
     const FOUND = 'found';
     const NOT_FOUND = 'notFound'


    const inputState = (isLoading, data, error, onDataTrueText, onDataFalseText) => {
        if ( error ) return <i  style={{color:"tomato"}}>{"- error while loading data"}</i>;
        else if( isLoading ) return <CircularBar  size={"var(--ultra-small)"} stroke={2}></CircularBar> 
        else if( data === FOUND) return <i  style={{color:"tomato"}}>{" - "+onDataTrueText}</i>;
        else if ( data === NOT_FOUND){  return <i  style={{color:"#00ff04"}}>{" - "+onDataFalseText}</i>;}
    }
    
    const validateEmailInThisPage = (input) => {
        setNotValidEmail(false)
        if (validateEmail(input)) {  emailExistsOrNot(input);  }
        else { setNotValidEmail(true) }
    }

    const validateUsernameInthisPage = (input) => {
        setNotValidEmail(false)
        if (validateEmail(input)) {  emailExistsOrNot(input);  }
        else { setNotValidEmail(true) }
    }

    const validateDobInThisPage = (input) => {
        setNotValidDob(false)
        if (!validateDateFor13Years(input)) { setNotValidDob(true); }
        else { setNotValidDob(false) }
    }

    const validateGenderInThisPage = (input) => {
        if ( input !== null) { setnotValidGender(true); }
        else { setnotValidGender(false) }
    }

    const validatePhoneInThisPage = (event) => {
        const inputText = event.target.value;  
        setPhone(event);  
        if ( (inputText !== null || inputText !== '' ) && validatePhone(inputText)) { setNotValidPhone(false); }
        else { setNotValidPhone(true) }
    }

    const validateBioInThisPage = (event) => {  

        const inputText = event.target.value;       
        console.log(inputText)       
        if (inputText.length <= 150) {          
          setBio(inputText);          
          setBioChars(inputText.length);         
        } else {             
          setBio( inputText.slice(0, 150)  );            
        } 

    }

    
   
  
    return (
        <div className="profile-edit">
            <div className="profile-edit-body">
                <form>
                    <div className="input-box-photo">
                            <div className='label-photo'>
                                 <img className='img'></img>
                            </div>
                            
                            <div className='input-box-body'>
                                <div className='username'>{user.name}</div>
                                <input className='edit-pic' style={{display:"none"}} id='profile-pic' name='profile-pic' type='file' accept="image/*"></input>
                                <label for="profile-pic">choose a photo</label>
                            </div>
                    </div>

                    <div className='input-box'>
                    <div className="label" >Email &nbsp; { notValidEmail? <i  style={{color:"tomato"}}>{" - enter valid email"}</i> :  inputState(emailloading, emaildata, emailerror, (user.email) === email? 'your current email' :'email already exists'  , 'available')} </div>
                              <input type="email" value={email} onChange={(event)=>{ setEmail(event); validateEmailInThisPage(event.target.value); }}  ></input>  
                    </div>

                    <div className='input-box'>
                        <div className="label" >Phone -&nbsp; <i  style={{color:notValidPhone?"tomato":"#00ff04"}}>{notValidPhone?" - enter valid 10 digit phone number":" Good "}</i> </div>
                        <input type="text" value={phone} onChange={validatePhoneInThisPage}  ></input> 
                    </div>

                    {/* <div className='input-box'>
                        <div className="label" >User name </div>
                        <input type="text" value={username} onChange={setUsername}  ></input> 
                    </div> */}

                    <div className='input-box'>
                        <div className="label" >Bio &nbsp; -  &nbsp;<i style={{fontWeight:"100"}}> {bioChars } / 150</i></div>
                        <input type="text" value={bio} onChange={validateBioInThisPage}  ></input> 
                 
                    </div>

                    <div className='input-box'>
                        <div className="label" >Gender </div>
                        <div className='gender-input'>   {SelectComponent}</div>
                    </div>

                    {/* <div className='input-box'>
                    <div className="label" >Date of birth &nbsp; <i  style={{color:notValidDob?"tomato":"#00ff04"}}>{notValidDob?" - enter valid date of birth atleast 13 years":" "}</i></div>
                              <input type="datetime-local" onChange={(event)=>{setSelectedDate(event); validateInput(event.target.value)}} value={selectedDate} min="1980-01-01" max={new Date().toISOString().substring(0,10)} ></input>
                    </div> */}

                  <div className='submit'>submit</div>
                  <div className='profile-edit-cancel' onClick={()=>navigate(-1)} >
                        <MdOutlineCancel></MdOutlineCancel>
                  </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileEdit;