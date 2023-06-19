import React from 'react';
import styles from '../../css/AddTournament.module.css';
import UseInputState from '../../hooks/UseInputState';
import UseSelect from '../../hooks/UseSelect';


function AddTournament() {
  const [ tournamentName, handleTournamentName, resetTournamentName ] = UseInputState('');
  const [selectedGame, GameSelectBox] = UseSelect(['CS:GO', 'Dota 2', 'Fortnite', 'Volarant'], 'select game name');
  const [selectedTournamentFormat, TournamentFormatSelectBox] = UseSelect(['Single Elimination'],'select tournament format');
  const [selectedTeamMode, TeamModeSelectBox] = UseSelect(['Single', 'Duo', 'Fortnite', 'Volarant'],'select team mode');


  
  return (
    <div className={styles.add_tournament} >
      
      <div className={styles.add_tournament_input}>
        <div className={styles.add_tournament_input_heading}>Game</div>
        <div className={styles.add_tournament_input_box}>{GameSelectBox}</div> 
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
     <div className={styles.add_tournament_cancel_button}>Cancel</div>
     
    </div>
  )

}


export default AddTournament;