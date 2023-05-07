import React from 'react';
import Lottie from 'react-lottie';
import NotFoundImg from "../assets/404.json";
import { MdSportsEsports } from "react-icons/md";

function NotFound  () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: NotFoundImg,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return <div className="not-found">
                <div className="not-found-container">
                    <div className="not-found-heading"> 404 <span className="joystick" >🎮</span> Not found </div> 
                    <div className="not-found-404">You reached wrong place. Don't worry we will take you to right place 😊</div>
                </div>
    </div>;
}



export default NotFound;