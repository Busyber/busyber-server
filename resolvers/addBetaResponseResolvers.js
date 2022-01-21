const betaUserModel = require("../models/betaUserModel.js");


module.exports = {
    Query: {
        
    },
    Mutation: {
        async addBetaUser(_, params, context ) {
 const betaUserData =await betaUserModel.findOne({email : params.betaUser.email, });

let addBetaUserData;
 if(!(betaUserData && betaUserData.email)){
const  betaUserItem = new betaUserModel(); 
betaUserItem.name = params.betaUser.name
 betaUserItem.email = params.betaUser.email
 betaUserItem.phone = params.betaUser.phone
 betaUserItem.type = params.betaUser.type
 
  addBetaUserData = await betaUserItem.save();


}
 

 
 return {
success : (addBetaUserData && addBetaUserData.email) ? true : false, 
exists : (betaUserData && betaUserData.email) ? true : false, 

}
},

    }
}