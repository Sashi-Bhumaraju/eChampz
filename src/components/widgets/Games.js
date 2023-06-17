import React, { useEffect } from 'react'
import styles from '../../css/Games.module.css'
import UseHorizontalScrollById from '../../hooks/UseHorizontalScrollById';
import { useSelector } from 'react-redux';
import UseThunk from '../../hooks/UseThunk';
import { GetAllGames } from '../../store';
import { GetIconByName } from '../../assets/images/GetImagesByName';
import GamesLoading from '../skeleton/GamesLoading';
import { useNavigate } from 'react-router-dom';
import ToLowerCaseRemoveWhiteSpace from '../../util/ToLowerCaseRemoveWhiteSpace';

function Games () {

  UseHorizontalScrollById('games_scroll')
  const arr = Array(30).fill().map((_, index) => index);  
  const games = useSelector((state)=>state.games.allGames);
  const [getGames, data, isLoading, isError] = UseThunk(GetAllGames);
  const navigate = useNavigate();

  const gameDetailsPage = (gameName) => {  
        console.log(gameName)  
            navigate(`game/${ToLowerCaseRemoveWhiteSpace(gameName)}`);   
  }   

  useEffect( () => {
            if (games.length === 0) getGames();
        },[])

  
  return (
        <div className={styles.games }>
            <div className={styles.game_heading}>Games</div>
            <div id='games_scroll' className={styles.games_scroll}>
                { isLoading? <GamesLoading count={4}/> : null}
                {/* { (!isLoading && !isError)? <div className={ styles.add_tournament }>Add Tournament</div> : null} */}
                { (!isLoading && !isError)?  games.map((game)=><div onClick={()=>gameDetailsPage(game.gameName)} className={styles.game_card} style={{backgroundImage:`url(${game.gameImageUrl})`}}> <div className = {styles.game_icon}  style={{backgroundImage:`url(${GetIconByName(game.gameName)})`}}></div> </div>): null}
            </div>
        </div>
    )

}

export default Games