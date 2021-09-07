import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import mvsrv from '../services/moviesService';
import EditMovieComp from "./editMovie";

function MovieComp(props) {

  const [page, setPage] = useState("movies");

  const [movie, setMovie] = useState({})

  useEffect(async () =>
  {
    let resp = await mvsrv.getMovie(props.movieid);
    setMovie(resp.data);
  }, [])

  //DELETE a Movie
  const deleteMovie = async () =>
  {
      await axios.delete("http://localhost:8000/api/movies/"+ props.movieid);
      window.location.reload();
  }

  return (
    <div>
    <div className="App">
      <div className="App" style={{ borderStyle : "solid" , borderColor : "red" , borderWidth : "4px" }}>
        <h2><Link to={"/movie/" + movie._id} >{movie.name}, {movie.premiered}</Link> </h2>
        <h4>Genres : {movie.genres}</h4>

        <img src={movie.image} /> <br></br>

        <button onClick={() => setPage("editMovie")}>Edit</button>
        <button onClick={deleteMovie}>Delete</button>

        {page === "editMovie" && <EditMovieComp />}
      </div>
    </div>
    <br/>
    </div>
  );
}

export default MovieComp;