const membersBL = require('../models/membersBL')
const express = require('express')

const router = express.Router();

//GET ALL Members
router.route('/').get(async function(req,resp)
{
    let data = await membersBL.getAllMembers();
    return resp.json(data)
})

//GET Member by ID
router.route('/:id').get(async function(req,resp)
{
    let data = await membersBL.getMember(req.params.id);
    return resp.json(data)
})

//POST a Member
router.route('/').post(async function(req,resp)
{
    let data = await membersBL.createMember(req.body);
    return resp.json(status)
})

//PUT a Member
router.route('/:id').put(async function(req,resp)
{
    let status = await membersBL.updateMember(req.params.id, req.body);
    return resp.json(status)
})

//DELETE a Member
router.route('/:id').delete(async function(req,resp)
{
    let status = await membersBL.deleteMember(req.params.id);
    return resp.json(status)
})

module.exports = router