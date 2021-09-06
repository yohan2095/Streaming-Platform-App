const usersBL = require('../models/usersBL')
const express = require('express')


const router = express.Router();

//GET ALL Users
router.route('/').get(async function(req,resp)
{
    let data = await usersBL.getAllUsers();
    return resp.json(data)
})

//GET User by ID
router.route('/:id').get(async function(req,resp)
{
    let data = await usersBL.getUser(req.params.id);
    return resp.json(data)
})

module.exports = router