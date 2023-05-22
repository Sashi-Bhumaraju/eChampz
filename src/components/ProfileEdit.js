import { useSelector } from 'react-redux';
import UseInputState from '../hooks/UseInputState';
import UseSelect from '../hooks/UseSelect';
import { MdOutlineCancel } from 'react-icons/md'
function ProfileEdit () {

    const user = useSelector((state)=>{
            return state.user.data;
    })

    const [email, setEmail, resetEmail] = UseInputState(user.email);
    const [phone, setPhone, resetPhone] = UseInputState(user.phone);
    const [username, setUsername,  resetUsername] = UseInputState(user.name);
    const [bio, setBio,  resetBio] = UseInputState(user.bio);
    const [selectedDate, setSelectedDate, resetSelectedDate] = UseInputState((user.dob));
    const [gender,SelectComponent] = UseSelect(["male","female","no mention"]); 
 

  
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
                        <div className="label" >Email </div>
                        <input type="email" value={email} onChange={setEmail}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >Phone </div>
                        <input type="text" value={phone} onChange={setPhone}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >User name </div>
                        <input type="text" value={username} onChange={setUsername}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >Bio </div>
                        <input type="email" value={bio} onChange={setBio}  ></input> 
                    </div>
                    <div className='input-box'>
                        <div className="label" >Gender </div>
                        <div className='gender-input'>   {SelectComponent}</div>
                     
                    </div>
                    <div className='input-box'>
                        <div className="label" >Date of birth </div>
                        <input type="datetime-local" onChange={(event)=>{setSelectedDate(event); }} value={selectedDate} min="1980-01-01" max={new Date().toISOString().substring(0,10)} ></input>
                    </div>
                  <div className='submit'>submit</div>
                  <div className='profile-edit-cancel'>
                        <MdOutlineCancel></MdOutlineCancel>
                  </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileEdit;