const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mutation {
    register(user: UserInput): User
    login(user: UserInput): User
    changePassword(password : ChangePasswordInput): User
    resetPassword(email: String):Int
    changeTokenPassword(token: String,password: String): User
    logout: Boolean
    addBetaUser(betaUser : betaUserInput) :addBetaResponse
deleteBetaUser(betaUser : betaUserInput) :betaUser

  }
`;

