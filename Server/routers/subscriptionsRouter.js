const subscriptionsBL = require('../models/subscriptionsBL')
const express = require('express')

const router = express.Router();

//GET ALL Subscriptions
router.route('/').get(async function(req,resp)
{
    let data = await subscriptionsBL.getAllSubscriptions();
    return resp.json(data)
})

//GET Subscription by ID
router.route("/:id").get(async function(req,resp)
{
    let data = await subscriptionsBL.getSubscription(req.params.id);
    return resp.json(data)
})

//POST a Subscription
router.route("/").post(async function(req,resp)
{
    let sttus = await subscriptionsBL.createSubscription(req.body);
    return resp.json(status)
})

//DELETE a Subscription
router.route("/:id").delete(async function(req,resp)
{
    let status = await subscriptionsBL.deleteSubscription(req.params.id);
    return resp.json(status)
})

module.exports = router