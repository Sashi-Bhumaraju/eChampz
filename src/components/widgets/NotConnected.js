import React,{useState} from 'react';

function NotConnected  () {
   
    return <div className="not-found">
       
                <div className="not-found-container">
                    <div className="not-found-heading"> 404 <span className="joystick" >🛸</span> No Internet Connection! </div> 
                    <div className="not-found-404">Please try connecting your device with internet via wifi or any other possibilities. 😊</div>
                </div>
    </div>;

}

export default NotConnected;




