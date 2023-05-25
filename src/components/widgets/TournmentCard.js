import React from 'react';
import GetGameColor from '../../assets/colors/Colors';
import { TbShare3 } from 'react-icons/tb';
import {MdOutlineSaveAlt} from 'react-icons/md'

const TournamentCard = ({ tournament }) => {


    const getImageUrl = gameName => {
        const imageName = gameName.toLowerCase().replace(/\s/g, '') + '.png';
        return require(`../../assets/images/${imageName}`);
      };

   

    
    return (
        <div className="touranament-card" > 
          
          <div style={{backgroundImage: `url(${getImageUrl(tournament.gameName)})` }}  alt={tournament.name} className="card-image" />
            <div className="card-content" style={{borderTop:`2px solid ${GetGameColor(tournament.gameName,1)}`, background:`linear-gradient(to bottom, ${GetGameColor(tournament.gameName,0.2)}, transparent 50%)`   }}>   
               
                <div className='card-title'>
                    <div className='card-game-name'>
                        <div  style={{color:GetGameColor(tournament.gameName,1)}} > {tournament.gameName}  ({tournament.gameMode}) </div> 
                        <div> {tournament.name}</div>
                        <div>{tournament.time}</div>
                    </div>
                    <div className='card-game-prize'>
                        <div>PRIZING</div>
                        <div style={{color:"green"}}>{tournament.prizeMoney}</div>
                        <div>{tournament.numTeams}</div>
                    </div>
                </div>   
               
                <div className='user-action' style={{borderTop: `0px solid ${GetGameColor(tournament.gameName,0.5)}`}} ><div className='user-action-icons'> <span style={{marginLeft:20}}><TbShare3></TbShare3></span> <span style={{marginLeft:10}}><MdOutlineSaveAlt></MdOutlineSaveAlt></span>   </div></div>
            </div>    
           
        </div>   
    );


};

export default TournamentCard;
