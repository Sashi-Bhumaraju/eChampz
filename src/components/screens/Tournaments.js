import { useSelector } from "react-redux";
import UseThunk from "../../hooks/UseThunk";
import { GetAllTournaments } from "../../store";
import CircularBar from "../widgets/CircularBar";
import TournamentsList from "../widgets/TournamentsList";
import { useEffect } from "react";
import TournmentCardLoading from "../skeleton/TournmentCardLoading";

function Tournaments () {

    const [RunGetAllTournaments, data, isLoading, isError] = UseThunk(GetAllTournaments);
    const allTournaments = useSelector((state) => {
        return state.tournaments.data;
     })

    useEffect(() => {
        console.log(allTournaments)
        if(allTournaments.length === 0) { RunGetAllTournaments() }
    },[])

    // if(isError) return "error"
    // if(isLoading) return "loading"
    // if( data ) return JSON.stringify( data)
    // if(isLoading) return <TournmentCardLoading count={10} ></TournmentCardLoading>

    return ( <div className="tournaments">
                <TournamentsList tournaments={allTournaments} ></TournamentsList>
                {isLoading? <TournmentCardLoading count={8} ></TournmentCardLoading> : '' }
                {isError? 'error while loading data' : ''}
         </div> );
}

export default Tournaments;