const { gql } = require("apollo-server-express");

module.exports = gql`
type betaUserAdded{
 _id : ID, 
}

input betaUserAddedInput {
 _id : ID, 
}


`

