const { gql } = require("apollo-server-express");

module.exports = gql`
type betaUser{
 _id : ID, 
name : String, 
email : String, 
phone : String, 
type : String, 
date : String, 
}

input betaUserInput {
 _id : String, 
name : String, 
email : String, 
phone : String, 
type : String, 
date : String, 
}


`

