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

const TournamentCard = ({ tournament }) => {

    return (
      
        <div className="touranament-card" > 
          {/* {JSON.stringify(tournament)} */}
          {/* style={{backgroundImage: `url(${GetImagesByName(tournament.gameName)})` }} */}
            <div style={{backgroundImage: `url(${GetImagesByName(tournament.gameName)})` }}   alt={tournament.name} className="card-image" />
            <div className="card-content" style={{borderTop:`1.5px solid ${GetGameColor(tournament.gameName,1)}`, background:`linear-gradient(to bottom, ${GetGameColor(tournament.gameName,0.2)}, transparent 70%)`   }}>   
               
                <div className='card-title'>
                        <div  style={{color:GetGameColor(tournament.gameName,1)}} > {tournament.name}  </div> 
                </div>   
                <div className='card-content-data'>
                        <div className='data'> 
                        {/* <img style={{width:12}} src={GetImagesByName('joystick')}/> &nbsp; */}
                        {tournament.gameName}</div>
                        <div className='data'> 
                        {/* <img style={{width:12}} src={GetImagesByName('fight')}/>&nbsp; */}
                        {tournament.gameMode}</div>
                        <div className='data' style={{color:"#008000",}}>  <img style={{width:12}} src={GetImagesByName('fee')}/>&nbsp;{tournament.prizeMoney}</div>
                        <div className='data'> <img style={{width:12,filter:'invert()'}} src={GetImagesByName('start')}/> &nbsp;{DateTimeFormatter( tournament.timeOfCreation)}</div>
                        <div className='data' >
                            {/* <img style={{width:13}} src={GetImagesByName('teams')}/>&nbsp; */}
                            {tournament.noOfTeams}</div>
                </div>
             
               
                <div className='user-action' style={{borderTop: `1px solid ${GetGameColor(tournament.gameName,0.1)}`, }} >
                <div className='prize-money' style={{color:''}} >
                    {/* <img style={{width:17.5, height:17.5, aspectRatio:'1/1'}} src={GetImagesByName('prize')}/>&nbsp; */}
                    ₹{tournament.prizeMoney}</div>
                    <div className='user-action-icons'>
                   
                         <span style={{marginLeft:25}}>
                            <img style={{width:17.5, filter:"invert() drop-shadow(1px 0px 0px white)"}} src={sendImg}/></span> 
                        <span style={{marginLeft:25}}>
                            <img style={{width:17.5, filter:"invert() drop-shadow(1px 0px 0px white)"}} src={saveImg}/></span>  
                     </div>
                    </div>
            </div>    
           
        </div>   
    );


};

export default TournamentCard;
