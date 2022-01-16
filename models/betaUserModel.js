const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : String, 
email : String, 
phone : String, 


})

const model = mongoose.model("betaUsers", schema);

module.exports = model;
