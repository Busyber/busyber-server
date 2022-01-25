const query = require("./query");
const mutation = require("./mutation");
const { userTypeDef } = require("../libs/auth");
const betaUser = require("./types/betaUser.js");
const addBetaResponse = require("./types/addBetaResponse.js");
const stats = require("./types/stats.js");




module.exports = [
   query,
   mutation,
   userTypeDef,
   betaUser,
addBetaResponse,
stats,

];
