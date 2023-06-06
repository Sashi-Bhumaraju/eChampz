import { useParams } from 'react-router-dom';
import styles from '../../css/TournamentDetails.module.css';
import { useEffect, useState } from 'react';
import UseThunk from '../../hooks/UseThunk';
import { GetTournamentById } from '../../store';
import GetImagesByName from '../../assets/images/GetImagesByName';
import GetGameColor from '../../assets/colors/Colors';
import DateTimeFormatter from '../../util/DateTimeFormatter'
import Tabbar from '../widgets/Tabbar';
import Overview from '../widgets/Overview';
import { components } from 'react-select';
import TournamentDetailsLoading from '../skeleton/TournamentDetailsLoading';
import NotConnected from '../widgets/NotConnected';

function TournamentDetails () {  
    const { tid } = useParams();
    const [runGetTournamentById, data, isLoading, isError] = UseThunk(GetTournamentById)
    const tabbarLinks = ['Overview','Chat','Participants']
    useEffect(()=>{
        runGetTournamentById(tid);
    },[]);


    if(isLoading) return <TournamentDetailsLoading></TournamentDetailsLoading>;
    if(isError) return <NotConnected></NotConnected>;
    if(data.gameName == undefined) return "slow internet"
    if (data) {
    const overView = <Overview gameName={data.gameName} maxTeams={data.maxTeams} timeOfCreation={data.timeOfCreation} tournamentTime={data.tournamentTime} prizeMoney={data.prizeMoney} tourneyDetails={data.tourneyDetails} ></Overview>
    return (<div className={styles.tournament_details}>

                <div className={styles.tournament_details_image} style={{backgroundImage: `url(${GetImagesByName(data.gameName)})`, borderBottom:`0px solid ${GetGameColor(data.gameName,1)}` }}>
                    <div className={styles.tournament_details_image_overlay_text}>
                       <span> Starting Time: {DateTimeFormatter(data.tournamentTime)}</span>  
                       <span className={styles.tournament_name}>{data.name}</span>  
                       <span>{data.conductorId}</span>    
                        </div>
                </div>

                <div className={styles.tournament_details_body}>
                <Tabbar links={ tabbarLinks } components={[overView,'chat','participants']} ></Tabbar>
                </div>
            </div>)   }
} 

export default TournamentDetails;