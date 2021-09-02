const moviesBL = require('../models/moviesBL')
const express = require('express')

const router = express.Router();

//GET ALL movies
router.route('/').get(async function(req,resp)
{
    let data = await moviesBL.getAllMovies();
    return resp.json(data)
})

//GET Movie by ID
router.route('/:id').get(async function(req,resp)
{
    let data = await moviesBL.getMovie(req.params.id);
    return resp.json(data)
})

//Post a Movie
router.route('/').post(async function(req,resp)
{
    let status = await moviesBL.createMovie(req.body);
    return resp.json(status)
})

//PUT a Movie
router.route('/:id').put(async function(req,resp)
{
    let status = await moviesBL.updateMovie(req.params.id, req.body);
    return resp.json(status)
})

//DELETE a Movie
router.route('/:id').delete(async function(req,resp)
{
    let status = await moviesBL.deleteMovie(req.params.id);
    return resp.json(status)
})


module.exports = router;