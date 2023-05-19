import { useSelector } from "react-redux";
import profileBackground from '../assets/profile-background.jpg';
import DateTimeFormatter from "../util/DateTimeFormatter";
import { TbGenderBigender } from 'react-icons/tb';
import { FaBirthdayCake, FaGenderless, FaUserEdit } from 'react-icons/fa'

function Profile () {

    const user = useSelector((state)=>{
        return state.user.data;
      
    })

    return ( <div className="profile"> 
            <div className="profile-container">
                
                <div className="profile-head" >
                    <div className="profile-pic">
                        
                    </div>
                    <div className="profile-head-body">
                        <div className="profile-username"> {user.name}</div>
                        <div className="profile-email"> {user.email} </div>
                        
                    </div>
                    <div className="profile-toggle">
                    <div className="profile-edit">  <FaUserEdit></FaUserEdit></div>
                        <div className="profile-logout">Logout</div>
                      
                    </div>
                    
                </div>
                <div className="profile-body">
                    <div className="profile-body-item"> <FaGenderless/> &nbsp; {user.gender}</div>
                    <div className="profile-body-item"> <FaBirthdayCake/> &nbsp;  {DateTimeFormatter(user.dob)  }</div>
                    {/* <div className="profile-body-item">{user.gender}</div> */}
                </div>
            </div>
      </div> );
}

export default Profile;