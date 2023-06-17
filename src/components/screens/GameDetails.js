import React, { useEffect, useState } from 'react';
import styles from '../../css/GameDetails.module.css'
import UseThunk from '../../hooks/UseThunk';
import { GetAllGames } from '../../store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ToLowerCaseRemoveWhiteSpace from '../../util/ToLowerCaseRemoveWhiteSpace';
import TournamentDetailsLoading from '../skeleton/TournamentDetailsLoading';
import { GetIconByName } from '../../assets/images/GetImagesByName';

function GameDetails() {
    
    const { gid } = useParams();
    const game = useSelector((state)=>{ return state.games.allGames.filter((game)=>{ if( ToLowerCaseRemoveWhiteSpace( game.gid ) === ToLowerCaseRemoveWhiteSpace( gid )) { return game }})[0]});
    const [getGames, data, isLoading, isError] = UseThunk(GetAllGames);
   
  
    useEffect( () => {
              if ( !game ) { getGames(); }
            
          },[])

    if(isLoading) return <TournamentDetailsLoading></TournamentDetailsLoading> ;
      
  if( game ) return ( 

    <div className={styles.game_details}> 

          <div className={styles.game_details_image} style={{backgroundImage: `url(${game.gameImageUrl})` }}>
                <div className={styles.game_details_image_overlay_text}> 
                       <div className={styles.icon} style={{backgroundImage:`url(${GetIconByName(game.gameName)})`}}></div>
                       <div className={styles.game_name}>{game.gameName}</div>  
                </div> 
          </div>  

        
          <div className={styles.add_touranment_button}> Add Tounrnament </div>
          <div className={styles.container}>
              <div className={styles.game_details_heading}>Game Name</div>
              <div className={styles.game_details_content}> {game.gameName} </div>
          </div>

          <div className={styles.container}>
              <div className={styles.game_details_heading}>Description</div>
              <div className={styles.game_details_content}> {game.description} </div>
          </div>

          <div className={styles.container}>
              <div className={styles.game_details_heading}>System Requirements</div>
              <div className={styles.game_details_content}> {game.systemRequirements} </div>
          </div>

          <div className={styles.container}>
              <div className={styles.game_details_heading}>Multiplayer</div>
              <div className={styles.game_details_content}> {game.multiplayer===true? `Yes, ${game.gameName} is a multi player video game` : `No, ${game.gameName} is not a multi player video game`} </div>
          </div>
          
    </div> 
  )
}

export default GameDetails