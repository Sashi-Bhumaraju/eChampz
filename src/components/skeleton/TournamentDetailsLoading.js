import styles from '../../css/TournamentDetailsLoading.module.css'
function TournamentDetailsLoading () {
  return (<div className={styles.tournament_details}>

    <div className={styles.tournament_details_image} >
        <div className={styles.tournament_details_image_overlay_text}>
           
                       <span className={styles.tournament_small_name }></span>  
                       <span className={styles.tournament_big_name }></span>  
                       <span className={styles.tournament_small_name }></span>    
                        </div>
         
    </div>

    <div className={styles.tabbar}></div>
    <div className={styles.tournament_details_body}>
                      {/* <span className={styles.tournament_details_body_name }></span>   */}
                     
                       {/* <span className={styles.tournament_details_body_name }></span>   */}
                       {/* <span className={styles.tournament_details_body_name2 }></span>  
                       <span className={styles.tournament_details_body_name2 }></span>  
                       <span className={styles.tournament_details_body_name2 }></span> */}
                       {/* <span className={styles.tournament_details_body_name }></span>   */}
    </div>
</div>)
}

export default TournamentDetailsLoading;