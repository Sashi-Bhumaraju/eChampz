import React from 'react';
import styles from '../../css/GamesLoading.module.css'

function GamesLoading ( {count} ) {
 const arr = Array(count).fill().map((_, index) => index);  

  return ( arr.map((game)=><div className={styles.game_card} style={{backgroundImage:`url(${game.gameImageUrl})`}}> <div className={styles.game_icon }/> </div>) )

}

export default GamesLoading