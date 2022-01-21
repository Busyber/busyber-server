const { gql } = require("apollo-server-express");

module.exports = gql`
type betaUser{
 _id : ID, 
name : String, 
email : String, 
phone : String, 
type : String, 
}

input betaUserInput {
 _id : ID, 
name : String, 
email : String, 
phone : String, 
type : String, 
}


`

