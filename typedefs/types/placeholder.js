const { gql } = require("apollo-server-express");

module.exports = gql`
type placeholder{
 _id : ID, 
}

input placeholderInput {
 _id : ID, 
}


`

