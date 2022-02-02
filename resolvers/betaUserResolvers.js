const betaUserModel = require("../models/betaUserModel.js");
const { dateCreated } = require("../libs/utils/dateUtil");


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
date : dateCreated(item), 

}
 returnContent.push(content) 
})

 return returnContent;
},

    },
    Mutation: {
        
    }
}
