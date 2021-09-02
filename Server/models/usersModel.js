const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    fname : String,
    usermane : String,
    password : String
})

module.exports = mongoose.model('users', UserSchema)