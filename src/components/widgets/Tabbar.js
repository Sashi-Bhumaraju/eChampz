import { useState } from "react"
import styles from '../../css/Tabbar.module.css'

function Tabbar ({ links, components }) {
   const  [currentComponent, setCurrentComponent] = useState(0);
   const getLinkClass = (idx) => {
       return (idx === currentComponent)? styles.tabbar_item+" "+styles.active : styles.tabbar_item
   }
   
   return <div className={styles.tanbar_container}>
    <div className={styles.tabbar} >
        {links.map((link,idx)=>{return <div  className={getLinkClass(idx)} onClick={()=>setCurrentComponent(idx)}> {link} </div> })} 
    </div>
  
   {components[currentComponent]}
   </div> 
}

export default Tabbar;
