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
import { useSelector } from 'react-redux';
import Chatting from './Chatting';

function TournamentDetails () {  
    const { tid } = useParams();
    const [runGetTournamentById, dataDummy, isLoading, isError] = UseThunk(GetTournamentById)
    const tabbarLinks = ['Overview','Chat','Participants','Matches','Rules']
    const data = useSelector((state)=>{
            return state.tournaments.allDetailedTournaments.get(tid);
    })
    
    useEffect(()=>{
        console.log(data)
        if ( !data ) runGetTournamentById(tid)
    },[]);


    if(isLoading) return <TournamentDetailsLoading></TournamentDetailsLoading>;
    if(isError) return <NotConnected></NotConnected>;
    // if(data.gameName == undefined) return "slow internet"
    if (data) {
    const overView = <Overview gameName={data.gameName} maxTeams={data.maxTeams} timeOfCreation={data.timeOfCreation} tournamentTime={data.tournamentTime} prizeMoney={data.prizeMoney} tourneyDetails={data.tourneyDetails} entryFee={data.entryFee} ></Overview>
    const chat = <Chatting></Chatting>
    return (<div className={styles.tournament_details}>

                <div className={styles.tournament_details_image} style={{backgroundImage: `url(${GetImagesByName(data.gameName)})`, borderBottom:`0px solid ${GetGameColor(data.gameName,1)}` }}>
                    <div className={styles.tournament_details_image_overlay_text}>
                       <span> Starting Time: {DateTimeFormatter(data.tournamentTime)}</span>  
                       <span className={styles.tournament_name}>{data.name}</span>  
                       <span>{data.conductorId}</span>    
                        </div>
                </div>

                <div className={styles.tournament_details_body}>
                <Tabbar links={ tabbarLinks } ></Tabbar>
                </div>
            </div>)   }
} 

export default TournamentDetails;