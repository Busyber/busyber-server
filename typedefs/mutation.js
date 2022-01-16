const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mutation {
    addBetaUser(name : String, email: String, phone: String) :betaUser

  }
`;

