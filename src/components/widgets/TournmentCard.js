import React from 'react';
import GetGameColor from '../../assets/colors/Colors';
import { TbShare3 } from 'react-icons/tb';
import {MdOutlineSaveAlt} from 'react-icons/md'
import saveImg from  '../../assets/images/save.png'
import sendImg from '../../assets/images/send.png'
import joystick from '../../assets/images/joystick.png'
import fee from '../../assets/images/fee.png'
import prize from '../../assets/images/prize.png'
import fight from '../../assets/images/fight.png'
import teams from '../../assets/images/teams.png'
import start from '../../assets/images/start.png'
import GetImagesByName from '../../assets/images/GetImagesByName';
import dota2 from  '../../assets/images/dota2.jpg'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {MdSportsEsports} from 'react-icons/md'
import DateTimeFormatter from '../../util/DateTimeFormatter';
import { useNavigate } from 'react-router-dom';
import {BiSend} from 'react-icons/bi'
import {FiSend} from 'react-icons/fi'
import {IoIosShareAlt} from "react-icons/io";
import {BsSave} from 'react-icons/bs'
import {MdSaveAlt} from 'react-icons/md'
import {GrSave} from 'react-icons/gr'
import {HiOutlineSave} from 'react-icons/hi'

const TournamentCard = ({ tournament }) => {

    const navigate = useNavigate();
    const cardDetailsPage = () => {
            navigate(tournament.tid)
    }

    return (
        <div className="touranament-card"  > 
          {/* {JSON.stringify(tournament)} */}
          {/* style={{backgroundImage: `url(${GetImagesByName(tournament.gameName)})` }} */}
            <div onClick={cardDetailsPage} style={{backgroundImage: `url(${GetImagesByName(tournament.gameName)})` }}   alt={tournament.name} className="card-image" > <div className='card-image-border' style={{backgroundColor:GetGameColor(tournament.gameName,1)}}></div> </div>
            <div onClick={cardDetailsPage} className="card-content" style={{borderTop:`0px solid ${GetGameColor(tournament.gameName,1)}`, background:`linear-gradient(to bottom, ${GetGameColor(tournament.gameName,0.25)}, transparent 50%)`   }}>   
               
                <div className='card-title'>
                        <div  style={{color:GetGameColor(tournament.gameName,1)}} > {tournament.name}  </div> 
                </div>   
                <div className='card-content-data' >
                        <div className='data'> 
                        {/* <img style={{width:12}} src={GetImagesByName('joystick')}/> &nbsp; */}
                        {tournament.gameName}</div>

                       
         
                        <div className='data'> 
                        
                        {/* <img style={{width:12}} src={GetImagesByName('fight')}/>&nbsp; */}
                        {tournament.gameMode}</div>
                        <div className='data' style={{color:"#008000",}}> ₹{tournament.prizeMoney}</div>
                        <div className='data'>{DateTimeFormatter( tournament.timeOfCreation)} &nbsp; <img style={{width:12,filter:'invert()'}} src={GetImagesByName('start')}/></div>
                        <div className='data' >
                            {/* <img style={{width:13}} src={GetImagesByName('teams')}/>&nbsp; */}
                            {tournament.noOfTeams}</div>
                </div>
             
               
              
            </div>    
            <div className='user-action' style={{borderTop: `1px solid ${GetGameColor(tournament.gameName,0.1)}`, }} onClick={()=>{}}>
                <div className='prize-money' style={{color:''}} >
                    {/* <img style={{width:17.5, height:17.5, aspectRatio:'1/1'}} src={GetImagesByName('prize')}/>&nbsp; */}
                    ₹{tournament.prizeMoney}</div>
                    <div className='user-action-icons'>
                     {/* <BiSend></BiSend> */}
                     <span className='icon'>    <HiOutlineSave></HiOutlineSave></span>
                     <span className='icon'>  <FiSend></FiSend></span>
                    
                    
                  
                   
                       
                     </div>
                    </div>
        </div>   
    );


};

export default TournamentCard;
