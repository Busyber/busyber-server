const mongoose = require('mongoose');

const schema = mongoose.Schema({
    type : String, 


})

const model = mongoose.model("profiles", schema);

module.exports = model;
