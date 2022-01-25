const betaUserModel = require("../models/betaUserModel.js");


module.exports = {
    Query: {
        
    },
    Mutation: {
        async deleteBetaUser(_, params, context ) {
 const betaUserData = await betaUserModel.findByIdAndDelete(params.betaUser._id);


 
 return {
type : betaUserData.type, 
phone : betaUserData.phone, 
email : betaUserData.email, 
name : betaUserData.name, 

}
},

    }
}
