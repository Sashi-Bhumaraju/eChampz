import Tournament from "../model/Tournament";
import User from "../model/User";


//  this is only for user object
function NonSerializerUser (userJsonObj) {
    const data = userJsonObj;
    const user = new  User(data.name,data.email,data.bio,data.gender,data.phone,data.dob,data.invitedTournaments,data.myTournaments,data.conductedTournaments,data.profilePic,data.verified);
    return user;
}



//  this is only for Tournaments object
function NonSerializerTournament (tournamentJsonObj) {
    const data = tournamentJsonObj;
    const tournament = new  Tournament(data.conductorId, data.name, data.gameName, data.gameMode, data.prizeMoney, data.entryFee, data.maxTeams, data.noOfTeams, data.level, data.timeOfCreation, data.tournamentTime, data.registrationDeadLine, data.tourneyDetails, data.eliminatedTeams, data.matches, data.teams);
    return tournament;
}


//  this is only for Tournaments List object
function NonSerializerTournamentList (tournamentsJsonObjsList) {
    const data = tournamentsJsonObjsList;
    const tournamentsList = data.map((obj) => NonSerializerTournament(obj));
    return tournamentsList;
}


export  { NonSerializerUser, NonSerializerTournamentList, NonSerializerTournament };