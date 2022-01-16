const betaUserModel = require("../models/betaUserModel.js");


module.exports = {
    Query: {
        async placeholder(_, params, context) {
         


            return {

            }
        },

    },
    Mutation: {
        async addBetaUser(_, params, context) {
            console.log({params})
            const betaUserItem = new betaUserModel();
            betaUserItem.name = params.name
            betaUserItem.email = params.email
            betaUserItem.phone = params.phone

            const betaUserData = await betaUserItem.save();


            return {
                phone: betaUserData.phone,
                email: betaUserData.email,
                name: betaUserData.name,

            }
        },

    }
}
