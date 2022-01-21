const query = require("./query");
const mutation = require("./mutation");
const betaUser = require("./types/betaUser.js");
const addBetaResponse = require("./types/addBetaResponse.js");
const placeholder = require("./types/placeholder.js");




module.exports = [
   query,
   mutation,
   betaUser,
addBetaResponse,
placeholder,

];
