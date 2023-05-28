class Tournament {

    constructor( conductorId, name, gameName, gameMode, prizeMoney, entryFee, maxTeams, noOfTeams, level,  
        timeOfCreation, tournamentTime, registrationDeadline, tourneyDetails, eliminatedTeams, matches, teams ) {
        this.conductorId = conductorId;
        this.entryFee = entryFee;
        this.gameMode = gameMode;
        this.gameName = gameName;
        this.level = level;
        this.maxTeams = maxTeams;
        this.name = name;
        this.noOfTeams = noOfTeams;
        this.prizeMoney = prizeMoney;
        this.timeOfCreation = timeOfCreation;
        this.tournamentTime = tournamentTime;
        this.registrationDeadline = registrationDeadline;
        this.tourneyDetails = tourneyDetails
        this.teams = teams;
        this.eliminatedTeams = eliminatedTeams;
        this.matches = matches;
    }

  }

  
export default Tournament;
  