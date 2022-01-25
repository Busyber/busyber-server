const { gql } = require("apollo-server-express");

module.exports = gql`

type PermissionUser {
  _id: ID
  email:String
  viewOnly : Boolean
  emailSent: Boolean
}


input PermissionUserInput{
  email:String
  viewOnly : Boolean
}
`


