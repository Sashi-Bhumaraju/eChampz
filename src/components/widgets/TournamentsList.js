import React from 'react';
import TournamentCard from './TournmentCard';
import styles from '../../css/Games.module.css'
 
const tournaments = [
    {
      id: 1,
      image: 'tournament1.jpg',
      name: 'Tournament 1',
      gameMode: 'Single Elimination',
      gameName: 'CSGO',
      prizeMoney: '$10,000',
      numTeams: 16,
      time: 'May 30, 2023',
    },
    {
      id: 2,
      image: 'tournament2.jpg',
      name: 'Tournament 2',
      gameMode: 'Round Robin',
      gameName: 'dota2',
      prizeMoney: '$5,000',
      numTeams: 8,
      time: 'June 5, 2023',
    },
    {
      id: 2,
      image: 'tournament2.jpg',
      name: 'Tournament 2',
      gameMode: 'Round Robin',
      gameName: 'CSGO',
      prizeMoney: '$5,000',
      numTeams: 8,
      time: 'June 5, 2023',
    },
    {
        id: 2,
        image: 'tournament2.jpg',
        name: 'Tournament 2',
        gameMode: 'Round Robin',
        gameName: 'CSGO',
        prizeMoney: '$5,000',
        numTeams: 8,
        time: 'June 5, 2023',
      },
      {
        id: 2,
        image: 'tournament2.jpg',
        name: 'Tournament 2',
        gameMode: 'Round Robin',
        gameName: 'CSGO',
        prizeMoney: '$5,000',
        numTeams: 8,
        time: 'June 5, 2023',
      },
      {
        id: 2,
        image: 'tournament2.jpg',
        name: 'Tournament 2',
        gameMode: 'Round Robin',
        gameName: 'CSGO',
        prizeMoney: '$5,000',
        numTeams: 8,
        time: 'June 5, 2023',
      },
      {
        id: 2,
        image: 'tournament2.jpg',
        name: 'Tournament 2',
        gameMode: 'Round Robin',
        gameName: 'dota2',
        prizeMoney: '$5,000',
        numTeams: 8,
        time: 'June 5, 2023',
      },
      {
        id: 2,
        image: 'tournament2.jpg',
        name: 'Tournament 2',
        gameMode: 'Round Robin',
        gameName: 'CSGO',
        prizeMoney: '$5,000',
        numTeams: 8,
        time: 'June 5, 2023',
      },
      
    // Add more tournament objects as needed
  ];

  
  const TournamentsList = ( props ) => {

    return (
      <div className='tournament-list'>
        <div className={styles.tournaments_heading}>Tournaments</div>
        {/* <TournamentCard tournaments={tournaments} /> */}

            <div className="grid-container">
            {props.tournaments.map((tournament,idx) => (
            
                <TournamentCard key={tournament.name} tournament={tournament} />
            
            )) }
            </div>
      </div>
    );
  };
  
  export default TournamentsList;

