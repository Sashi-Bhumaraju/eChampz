import React from 'react';
import TournamentCard from './TournmentCard';

 
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

  
  const TournamentsList = () => {

    return (
      <div className='tournament-list'>
        <h2>Tournaments</h2>
        {/* <TournamentCard tournaments={tournaments} /> */}

            <div className="grid-container">
            {tournaments.map(tournament => (
                <TournamentCard tournament={tournament} />
            ))}
            </div>
      </div>
    );
  };
  
  export default TournamentsList;

