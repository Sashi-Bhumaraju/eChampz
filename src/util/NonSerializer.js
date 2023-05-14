import User from "../model/User";

//  this is only for user object
function NonSerializerUser (userJsonObj) {
    const data = userJsonObj;
    const user = new  User(data.name,data.email,data.bio,data.gender,data.phone,data.dob,data.invitedTournaments,data.myTournaments,data.conductedTournaments,data.profilePic,data.verified);
    return user;
}

export  { NonSerializerUser };