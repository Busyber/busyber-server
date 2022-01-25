const { gql } = require("apollo-server-express");

module.exports = gql`
type stats{
 _id : ID, 
totalBetaUsers : Float, 
taskers : Float, 
customers : Float, 
both : Float, 
}

input statsInput {
 _id : String, 
totalBetaUsers : Float, 
taskers : Float, 
customers : Float, 
both : Float, 
}


`

