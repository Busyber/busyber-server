const betaUserModel = require("../models/betaUserModel.js");


module.exports = {
    Query: {
        async overview(_, params, context ) {
 const betaUserData =await betaUserModel.find({});


let betaUser_idCount = 0 
betaUserData.map(item =>{
 if(item._id){
 betaUser_idCount++
} 
})

let betaUsertypeBothCount = 0 
betaUserData.map(item =>{
 if(item.type === "Both"){
 betaUsertypeBothCount++
} 
})

let betaUsertypeCustomerCount = 0 
betaUserData.map(item =>{
 if(item.type === "Customer"){
 betaUsertypeCustomerCount++
} 
})

let betaUsertypeTaskerCount = 0 
betaUserData.map(item =>{
 if(item.type === "Tasker"){
 betaUsertypeTaskerCount++
} 
})

 
 return {
totalBetaUsers : betaUser_idCount, 
taskers : betaUsertypeTaskerCount, 
customers : betaUsertypeCustomerCount, 
both : betaUsertypeBothCount, 

}
},

    },
    Mutation: {
        
    }
}
