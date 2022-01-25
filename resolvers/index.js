const { userResolvers } = require('../libs/auth');

const addBetaResponseResolvers = require("./addBetaResponseResolvers.js");
const betaUserResolvers = require("./betaUserResolvers.js");
const statsResolvers = require("./statsResolvers.js");


module.exports = [
    userResolvers,
    addBetaResponseResolvers,
betaUserResolvers,
statsResolvers,

];
