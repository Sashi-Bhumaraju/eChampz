import styles from '../../css/TournmentCardLoading.module.css'
function TournmentCardLoading (props) {


const  skeletonCard =   <div className={styles.tournament_card}>
                            <div className={styles.tournament_card_image}> <div className={styles.tournament_card_content_data_shimmer}></div></div>
                            <div className={styles.tournament_card_content}>
                                <div className={styles.tournament_card_content_data}><div className={styles.tournament_card_content_data_shimmer}></div></div>
                                <div className={styles.tournament_card_content_data}><div className={styles.tournament_card_content_data_shimmer}></div></div>
                                <div className={styles.tournament_card_content_data2}><div className={styles.tournament_card_content_data_shimmer}></div></div>
                                
                                {/* <div className={styles.tournament_card_content_data}></div>
                                <div className={styles.tournament_card_content_data}></div>
                                <div className={styles.tournament_card_content_data}></div> */}
                            </div>
                        </div>
const  skeletonCards = Array.from({length:props.count},()=>skeletonCard)
return <div className={styles.tournament_skeleton_list}>{skeletonCards.map((card)=>card)}</div> 
}

export default TournmentCardLoading;