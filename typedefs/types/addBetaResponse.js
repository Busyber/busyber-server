const { gql } = require("apollo-server-express");

module.exports = gql`
type addBetaResponse{
 _id : ID, 
exists : Boolean, 
success : Boolean, 
}

input addBetaResponseInput {
 _id : String, 
exists : Boolean, 
success : Boolean, 
}


`

