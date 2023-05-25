import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BsPersonCircle } from 'react-icons/bs';
import { HiOutlineHome, HiHome , HiOutlineChatAlt, HiChatAlt} from 'react-icons/hi';
import { AiOutlineTrophy, AiFillTrophy } from 'react-icons/ai';
import {IoPersonCircleOutline, IoPersonCircle} from 'react-icons/io5';
import UseIsMobile from "../../hooks/UseIsMobile";


function Navbar () {

   
    const isMobile = UseIsMobile();
    const navStyles = ({isActive}) => {
       return  isActive? "active-nav-link non-active-nav-link" : "non-active-nav-link"
    }
    const user = useSelector((state)=>{
        return state.user.data;
    })
    const navProfileStyles = ({isActive}) => {
        return  isActive? "active-nav-link-profile non-active-nav-link-profile" : "non-active-nav-link-profile"
    }

    const renderIcons = (icon, text) => {
       return isMobile? icon : text;
    }

    return (
        
        <div className="navbar">

            <div style={{}} className="app-name">eChampz!</div> 
            <NavLink  className={navStyles} to="/dashboard/tournaments"> {renderIcons(<HiOutlineHome></HiOutlineHome>,'Tournaments') } </NavLink>
            <NavLink className={navStyles} to="/dashboard/chat"> {renderIcons(  <HiOutlineChatAlt></HiOutlineChatAlt>,'chat') } </NavLink>
            <NavLink className={navStyles}  to="/dashboard/my-tournaments">{renderIcons( <AiOutlineTrophy></AiOutlineTrophy>,'My Tournaments') } </NavLink>
            <NavLink className={navProfileStyles} to="/dashboard/profile">{renderIcons(  <IoPersonCircleOutline></IoPersonCircleOutline>,<>{user.name} <span style={{position:"absolute", right:"15px", height:"100%", display:"flex", justifyContent:"center",alignItems:"center"}}> <IoPersonCircleOutline></IoPersonCircleOutline></span></>) }  </NavLink>
           
        </div>
    )
}

export default Navbar;