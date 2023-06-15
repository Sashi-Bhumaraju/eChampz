import React, { useEffect } from 'react'
import styles from '../../css/Games.module.css'
import UseHorizontalScrollById from '../../hooks/UseHorizontalScrollById';
import { useSelector } from 'react-redux';
import UseThunk from '../../hooks/UseThunk';
import { GetAllGames } from '../../store';
import { GetIconByName } from '../../assets/images/GetImagesByName';

function Games () {

  UseHorizontalScrollById('games_scroll')
  const arr = Array(30).fill().map((_, index) => index);  
  const games = useSelector((state)=>state.games.allGames);
  const [getGames, data, isLoading, isError] = UseThunk(GetAllGames);

  useEffect( () => {
            if (games!= null) getGames();
        },[])

  
  return (
        <div className={styles.games }>
            <div className={styles.game_heading}>Games</div>
            <div id='games_scroll' className={styles.games_scroll}>
                { isLoading? 'loading' : null}
                {/* { (!isLoading && !isError)? <div className={ styles.add_tournament }>Add Tournament</div> : null} */}
                { (!isLoading && !isError)?  games.map((game)=><div className={styles.game_card} style={{backgroundImage:`url(${game.gameImageUrl})`}}> <img className = {styles.game_icon} src={GetIconByName(game.gameName)}></img> </div>): null}
            </div>
        </div>
    )

}

export default Games