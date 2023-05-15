import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound  () {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/login");
        },3000)
    },[])
   
    return <div className="not-found">
                <div className="not-found-container">
                    <div className="not-found-heading"> 404 <span className="joystick" >🎮</span> Not found </div> 
                    <div className="not-found-404">You reached wrong place. Don't worry we will take you to right place 😊</div>
                </div>
    </div>;

}



export default NotFound;