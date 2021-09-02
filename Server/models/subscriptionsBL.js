const { resolve } = require('path/posix')
const SubscriptionModel = require('./subscriptionsModel')

//GET ALL Subscriptions
const getAllSubscriptions = () =>
{
    return new Promise((resolve,reject) =>
    {
        SubscriptionModel.find({}, function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

//GET Subscription by ID
const getSubscription = (id) =>
{
    SubscriptionModel.findById(id, function(err,data)
    {
        if(err)
        {
            reject(err)
        }
        else
        {
            resolve(data)
        }
    })
}

//POST a Subscription
const createSubscription = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
        let sub = new SubscriptionModel({
            movieID : obj.movieID,
            memberID : obj.memberID,
            date : obj.date
        })

        sub.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Created')
            }
        })
    })
}

//DELETE a Subscription
const deleteSubscription = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        SubscriptionModel.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Deleted')
            }
        })
    })
}


module.exports = {getAllSubscriptions, getSubscription, createSubscription, deleteSubscription}