const betaUserModel = require("../models/betaUserModel.js");


module.exports = {
    Query: {
        async placeholder(_, params, context ) {
 const betaUserItem = new betaUserModel(); 
betaUserItem.name = params.addBetaUser.name
 betaUserItem.email = params.addBetaUser.email
 betaUserItem.phone = params.addBetaUser.phone
 
 const betaUserData = await betaUserModel.save();


 
 const returnContent = []; 
Data.map(item =>{
 const content = {

}
 returnContent.push(content) 
})

 return returnContent;
},

    },
    Mutation: {
        
    }
}
