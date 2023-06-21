import React, { useEffect, useState } from 'react';
import styles from '../../css/AddTournament.module.css';
import UseInputState from '../../hooks/UseInputState';
import UseSelect from '../../hooks/UseSelect';
import { useSelector } from 'react-redux';
import UseInputStateBox from '../../hooks/UseInputStateBox';
import { useNavigate } from 'react-router-dom';


function AddTournament() {
  
  const games = useSelector((state)=>state.games.allGames);
  const navigate = useNavigate();
  
  const [ tournamentFormatList, setTournamentFormatList ] = useState([]);
  const [ teamModeList, teamModeFormatList ] = useState([]);

  const [ TournamentInputBox, tournamentName, handleTournamentNameChange, resetTournamentName ] = UseInputStateBox({intialValue:'',placeHolder:'enter tournament name',activeState:true})
  const [ GameSelectBox, selectedGame, resetSelectedGame ] = UseSelect( { options:games.map( (game)=>game.gameName) , placeholder:'select game name',intialDisabledValue: false});
  const [ TournamentFormatSelectBox, selectedTournamentFormat, resetSelectedTournamentFormat, disableTournamentFormat] = UseSelect({ options: tournamentFormatList, placeholder:'select tournament format',intialDisabledValue:true});
  const [ TeamModeSelectBox, selectedTeamMode, resetSelectedTeamMode, disableTeamMode ] = UseSelect({ options: teamModeList,placeholder:'select team mode', intialDisabledValue: true});

  const reset = () => {
      setTournamentFormatList([]);
      resetSelectedTournamentFormat();
      teamModeFormatList([])
      resetSelectedTeamMode();
  }

  useEffect(()=>{
      if ( selectedGame) if(selectedGame.value) {
          reset();
          disableTeamMode(false);
          disableTournamentFormat(false);
          setTournamentFormatList(games.filter( (game)=>game.gameName === selectedGame.value)[0].tournamentFormat );
          teamModeFormatList(games.filter( (game)=>game.gameName === selectedGame.value)[0].teamMode );
          } 
  },[selectedGame])

  const navigateBack =()=>{
      navigate(-1)
  }
  
 return ( <div className={styles.add_tournament} >

            <div className={styles.add_tournament_input}>
              <div className={styles.add_tournament_input_heading}>Tournament Name</div>
              <div className={styles.add_tournament_input_box}>   {TournamentInputBox}</div> 
            </div>

            <div className={styles.add_tournament_input}>
              <div className={styles.add_tournament_input_heading}>Game</div>
              <div className={styles.add_tournament_input_box}> {GameSelectBox} </div> 
            </div>


            <div className={styles.add_tournament_input}>  
              <div className={styles.add_tournament_input_heading}>Tournament Format</div>
              <div className={styles.add_tournament_input_box}> {TournamentFormatSelectBox}</div> 
            </div>

            <div className={styles.add_tournament_input}>  
              <div className={styles.add_tournament_input_heading}>Team Mode </div>
              <div className={styles.add_tournament_input_box}> {TeamModeSelectBox}</div> 
            </div>


            <button className={styles.add_tournament_submit_button} disabled >Create Tournament</button>
            <div className={styles.add_tournament_cancel_button} onClick={navigateBack}>Cancel</div>

          </div>
        )
}


export default AddTournament;