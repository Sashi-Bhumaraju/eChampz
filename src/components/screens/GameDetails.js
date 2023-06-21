import React, { useEffect, useState } from 'react';
import styles from '../../css/GameDetails.module.css'
import UseThunk from '../../hooks/UseThunk';
import { GetAllGames } from '../../store';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import ToLowerCaseRemoveWhiteSpace from '../../util/ToLowerCaseRemoveWhiteSpace';
import TournamentDetailsLoading from '../skeleton/TournamentDetailsLoading';
import { GetIconByName } from '../../assets/images/GetImagesByName';

function GameDetails() {
    
    const { gid } = useParams();
    const naviagte = useNavigate()
    const game = useSelector((state)=>{ return state.games.allGames.filter((game)=>{ if( ToLowerCaseRemoveWhiteSpace( game.gid ) === ToLowerCaseRemoveWhiteSpace( gid )) { return game }})[0]});
    const [getGames, data, isLoading, isError] = UseThunk(GetAllGames);

    const openCreateTournament = () => naviagte('create-touranament');
   
  
    useEffect( () => {if ( !game ) { getGames(); }},[])


  if(isLoading) return <TournamentDetailsLoading></TournamentDetailsLoading> ;
      
  if( game ) return ( 

    <div className={styles.game_details}> 

          <div className={styles.game_details_image} style={{backgroundImage: `url(${game.gameImageUrl})` }}>
                <div className={styles.game_details_image_overlay_text}> 
                       <div className={styles.icon} style={{backgroundImage:`url(${GetIconByName(game.gameName)})`}}></div>
                       <div className={styles.game_name}>{game.gameName}</div>  
                </div> 
          </div>  

        
          <div className={styles.add_touranment_button} onClick={openCreateTournament}> Add Tounrnament </div>
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

          <div className={styles.container}>
              <div className={styles.game_details_heading}>Tornament Formats</div>
              <div className={styles.game_details_content}> {game.tournamentFormat.map((format => {return <li>{format}</li>}))} </div>
          </div>

          <div className={styles.container}>
              <div className={styles.game_details_heading}>Team Mode</div>
              <div className={styles.game_details_content}> {game.teamMode.map(mode=>{return <li>{mode}</li>  })} </div>
          </div>

          <Outlet/>

         
    </div> 
  )
}

export default GameDetails