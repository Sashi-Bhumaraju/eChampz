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
            <div className="profile-edit-body">
                <form>
                    <div className='input-box'>
                        <div className="label" >Email </div>
                        <input type="email" value={email} onChange={handleEmail}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >Phone </div>
                        <input type="email" value={email} onChange={handleEmail}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >User name </div>
                        <input type="email" value={email} onChange={handleEmail}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >Bio </div>
                        <input type="email" value={email} onChange={handleEmail}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >Date of birth </div>
                        <input type="email" value={email} onChange={handleEmail}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >Gender </div>
                        <input type="email" value={email} onChange={handleEmail}  ></input> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileEdit;