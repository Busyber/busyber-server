const betaUserModel = require("../models/betaUserModel.js");


module.exports = {
    Query: {
        async betaUsers(_, params, context ) {
 const betaUserData =await betaUserModel.find({});


 
 const returnContent = []; 
betaUserData.map(item =>{
  const content = {
_id : item._id, 
name : item.name, 
email : item.email, 
phone : item.phone, 
type : item.type, 

}
 returnContent.push(content) 
})

 return returnContent;
},

    },
    Mutation: {
        
    }
}
