import React from 'react';
import GetGameColor from '../../assets/colors/Colors';
import { TbShare3 } from 'react-icons/tb';
import {MdOutlineSaveAlt} from 'react-icons/md'
import saveImg from  '../../assets/images/save.png'
import sendImg from '../../assets/images/send.png'

const TournamentCard = ({ tournament }) => {


    const getImageUrl = gameName => {
        const imageName = gameName.toLowerCase().replace(/\s/g, '') + '.png';
        return require(`../../assets/images/${imageName}`);
      };
    
   

    
    return (
        <div className="touranament-card" > 
          
          <img src={getImageUrl(tournament.gameName)} style={{backgroundImage: `url(${getImageUrl(tournament.gameName)})` }}  alt={tournament.name} className="card-image" />
            <div className="card-content" style={{borderTop:`0px solid ${GetGameColor(tournament.gameName,1)}`, background:`linear-gradient(to bottom, ${GetGameColor(tournament.gameName,0.2)}, transparent 70%)`   }}>   
               
                <div className='card-title'>
                        <div  style={{color:GetGameColor(tournament.gameName,1)}} > {tournament.name}  </div> 
                </div>   
                <div className='card-content-data'>
                        <div className='data'> {tournament.gameName}</div>
                        <div className='data'> {tournament.gameMode}</div>
                        <div className='data'>{tournament.time}</div>
                        <div className='data' style={{color:"green"}}>{tournament.prizeMoney}</div>
                        <div className='data' >{tournament.numTeams}</div>
                </div>
             
               
                <div className='user-action' style={{borderTop: `1px solid ${GetGameColor(tournament.gameName,0.1)}`, }} ><div className='user-action-icons'> <span style={{marginLeft:25}}><img style={{width:15, filter:"invert()"}} src={sendImg}/></span> <span style={{marginLeft:20}}><img style={{width:15, filter:"invert()"}} src={saveImg}/></span>   </div></div>
            </div>    
           
        </div>   
    );


};

export default TournamentCard;
