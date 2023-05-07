class User {
    constructor(username, email, phone, gender, dob, bio,myTournaments, invitedTournaments, teamInvites) {
        this.username = username;  
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.dob = dob;
        this.bio = bio;
        this.invitedTournaments = invitedTournaments;
        this.myTournaments = myTournaments;
        this.teamInvites = teamInvites;
    }
  
    getUsername() {
      return this.username;
    }
  
    getEmail() {
      return this.email;
    }

    getPhone() {
        return this.phone;
    }

    getGender() {
        return this.gender;
    }    

    getDob() {
        return this.dob;
    }

    getBio() {
        return this.bio;
    }

    getInvitedTournaments() {
        return this.invitedTournaments;
    }

    getMyTournaments() {
        return this.myTournaments;
    }

    getTeamInvites() {
        return this.teamInvites;
    }
  }
  