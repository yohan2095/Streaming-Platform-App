import axios from 'axios';

const getAllMovies = async () =>
{
   return axios.get("http://localhost:8000/api/movies")   
}

const getMovie = async (id) =>
{
    return axios.get("http://localhost:8000/api/movies/" + id)
}

export default {getAllMovies, getMovie}