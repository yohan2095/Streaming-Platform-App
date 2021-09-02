const MovieModel = require('./moviesModel');

//GET ALL movies
const getAllMovies = () =>
{
    return new Promise((resolve,reject) => 
    {
        MovieModel.find({}, function(err,data)
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

//GET Movie by ID
const getMovie = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        MovieModel.findById(id, function(err,data)
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

//POST a Movie
const createMovie = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
        let mov = new MovieModel({
            name : obj.name,
            premiered : obj.premiered,
            genres: obj.genres,
            image : obj.image
        })

        mov.save(function(err)
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

//PUT a movie
const updateMovie = (id,obj) =>
{
    return new Promise((resolve,reject) =>
    {
        MovieModel.findByIdAndUpdate(id,
            {
                name : obj.name,
                premiered : obj.premiered,
                genres: obj.genres,
                image : obj.image
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated')
                }
            })
    })
}

//DELETE a Movie
const deleteMovie = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        MovieModel.findByIdAndDelete(id, function(err)
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


module.exports = {getAllMovies, getMovie, createMovie, updateMovie, deleteMovie}