import { useParams } from 'react-router-dom';
import styles from '../../css/TournamentDetails.module.css';
import { useEffect } from 'react';
import UseThunk from '../../hooks/UseThunk';
import { GetTournamentById } from '../../store';

function TournamentDetails () {  
    const { tid } = useParams();
    const [runGetTournamentById, data, isLoading, isError] = UseThunk(GetTournamentById)

    useEffect(()=>{
        runGetTournamentById(tid);
    },[]);

    if(isLoading) return "loading";
    if(isError) return JSON.stringify(isError);

    if (data)
    
    return (<div className={styles.tournament_Details}>
                details {tid}
                <div ></div>
            </div>)   
} 

export default TournamentDetails;