import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BsPersonCircle } from 'react-icons/bs';
import { HiOutlineHome, HiHome , HiOutlineChatAlt, HiChatAlt} from 'react-icons/hi';
import { AiOutlineTrophy, AiFillTrophy } from 'react-icons/ai';
import {IoPersonCircleOutline, IoPersonCircle} from 'react-icons/io5';
import { useEffect, useState } from "react";


function Navbar () {

    const [isMobile, setIsMobile] = useState(true)
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

    const changeScreen = () => {
        if (window.innerWidth < 701 ) setIsMobile(true) 
        else setIsMobile(false);
    }
    

    useEffect(() => {
        changeScreen();
        window.addEventListener('resize',changeScreen,false);
    }, )

 
    return (
        
        <div className="navbar">

            <div style={{}} className="app-name">eChampz!</div>
            {/* <HiOutlineHome></HiOutlineHome>
            <AiOutlineTrophy></AiOutlineTrophy>
            <HiOutlineChatAlt></HiOutlineChatAlt>
            <IoPersonCircleOutline></IoPersonCircleOutline> */}
            
            <NavLink  className={navStyles} to="/dashboard/tournaments"> {renderIcons(<HiOutlineHome></HiOutlineHome>,'Tournaments') } </NavLink>
            <NavLink className={navStyles} to="/dashboard/chat"> {renderIcons(  <HiOutlineChatAlt></HiOutlineChatAlt>,'chat') } </NavLink>
            <NavLink className={navStyles}  to="/dashboard/my-tournaments">{renderIcons( <AiOutlineTrophy></AiOutlineTrophy>,'My Tournaments') } </NavLink>
            <NavLink className={navProfileStyles} to="/dashboard/profile">{renderIcons(  <IoPersonCircleOutline></IoPersonCircleOutline>,<>{user.name} <span style={{position:"absolute", right:"15px"}}> <IoPersonCircleOutline></IoPersonCircleOutline></span></>) }  </NavLink>
           
        </div>
    )
}

export default Navbar;