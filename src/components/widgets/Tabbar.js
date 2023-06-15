import { useEffect, useState } from "react"
import styles from '../../css/Tabbar.module.css'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ToLowerCaseRemoveWhiteSpace from "../../util/ToLowerCaseRemoveWhiteSpace";

function Tabbar ({ links }) {
   const getLinkClass = ({isActive}) => {
       return isActive? styles.tabbar_item+" "+styles.active : styles.tabbar_item
   }

   
    return <div className={styles.tanbar_container}> 
                <div className={styles.tabbar} > 
                    {links.map((link,idx)=>{return <NavLink  className={getLinkClass}  to={ToLowerCaseRemoveWhiteSpace(link)} > {link} </NavLink> })} 
                </div> 
                <div className={styles.tabbar_body} > 
                    <Outlet></Outlet> 
                </div>
            </div> 
}

export default Tabbar;
