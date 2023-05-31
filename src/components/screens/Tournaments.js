import { useSelector } from "react-redux";
import UseThunk from "../../hooks/UseThunk";
import { GetAllTournaments } from "../../store";
import CircularBar from "../widgets/CircularBar";
import TournamentsList from "../widgets/TournamentsList";
import { useEffect } from "react";

function Tournaments () {

    const [RunGetAllTournaments, data, isLoading, isError] = UseThunk(GetAllTournaments);

    const allTournaments = useSelector((state)=>{
        return state.tournaments.data;
     })

    useEffect(()=>{
        console.log(allTournaments)
        if(allTournaments.length === 0) { RunGetAllTournaments() }
    },[])

  

    return ( <div className="tournaments">
        {/* {JSON.stringify(allTournaments)} */}
                <TournamentsList tournaments={allTournaments} ></TournamentsList>
                {isLoading? <CircularBar size={"var(--big)"} stroke={2}></CircularBar>  : '' }
                {isError? 'error while loading data' : ''}
         </div> );
}

export default Tournaments;