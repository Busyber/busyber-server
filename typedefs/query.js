const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    placeholder(betaUser : betaUserInput) :betaUser

  }
`;

