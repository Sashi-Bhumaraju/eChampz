import { useParams } from 'react-router-dom';
import styles from '../../css/TournamentDetails.module.css';
import { useEffect } from 'react';
import UseThunk from '../../hooks/UseThunk';
import { GetTournamentById } from '../../store';
import GetImagesByName from '../../assets/images/GetImagesByName';
import GetGameColor from '../../assets/colors/Colors';
import DateTimeFormatter from '../../util/DateTimeFormatter'
import UseNavigation from '../../hooks/UseNavigation';

function TournamentDetails () {  
    const { tid } = useParams();
    const [runGetTournamentById, data, isLoading, isError] = UseThunk(GetTournamentById)
    const component = UseNavigation ( { links: ['Overview','Chat','Participants'] ,components: ['Overview', 'Chat', 'Participants']})
    useEffect(()=>{
        runGetTournamentById(tid);
    },[]);

    if(isLoading) return "loading";
    if(isError) return JSON.stringify(isError);
    

    if (data) 
    
    return (<div className={styles.tournament_details}>

                <div className={styles.tournament_details_image} style={{backgroundImage: `url(${GetImagesByName(data.gameName)})`, borderBottom:`0px solid ${GetGameColor(data.gameName,1)}` }}>
                    <div className={styles.tournament_details_image_overlay_text}>
                       <span> Starting Time: {DateTimeFormatter(data.tournamentTime)}</span>  
                       <span className={styles.tournament_name}>{data.name}</span>  
                       <span>{data.conductorId}</span>    
                        </div>
                </div>

                <div className={styles.tournament_details_body}>
               {component}
                </div>
            </div>)   
} 

export default TournamentDetails;