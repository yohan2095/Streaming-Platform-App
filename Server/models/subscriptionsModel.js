const mongoose = require('mongoose')

let SubscriptionSchema = new mongoose.Schema({
    movieID : String,
    memberID : String,
    date : Date
})

module.exports = mongoose.model('subscriptions', SubscriptionSchema)