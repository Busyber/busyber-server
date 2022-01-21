const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mutation {
    addBetaUser(betaUser : betaUserInput) :addBetaResponse

  }
`;

