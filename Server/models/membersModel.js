const mongoose = require('mongoose')

let MemberSchema = new mongoose.Schema({
    email : String,
    city : String
})

module.exports = mongoose.model('members', MemberSchema)