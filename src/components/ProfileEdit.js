import { useSelector } from 'react-redux';
import UseInputState from '../hooks/UseInputState';
function ProfileEdit () {

    const user = useSelector((state)=>{
            return state.user.data;
    })

    const [email, handleEmail, resetEmail] = UseInputState(user.email);
    const [passowrd, handlePasssword, resetPassword] = UseInputState("");

    return (
        <div className="profile-edit">
            <div className="profile-edit-form">
                <form>
                    {/* <div className="label" >Email &nbsp; { notValidEmail? <i  style={{color:"tomato"}}>{" - enter valid email"}</i> :  inputState(emailloading, emaildata, emailerror, 'email already exists', 'available')} </div>
                    <input type="email" value={email} onChange={(event)=>{ setEmail(event); validateInput(event.target.value); }}  ></input> ; */}
                </form>
            </div>
        </div>
    )
}

export default ProfileEdit;