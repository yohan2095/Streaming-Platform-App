import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import EditMovieComp from "./editMovie";
import mvsrv from '../../services/moviesService';
import SubscribersComp from "../SubscriptionsComps/subscribers";

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
      <div className="App" style={{ borderStyle : "solid" , borderColor : "MidnightBlue" , borderWidth : "5px" }}>
        <h2><Link to={"/movie/" + movie._id} >{movie.name}, {movie.premiered}</Link> </h2>
        <h4>Genres : {movie.genres}</h4>

        <img src={movie.image} /> <br></br>

        <button onClick={() => setPage("editMovie")}>Edit</button>
        <button onClick={deleteMovie} style={{backgroundColor : "MidnightBlue", color : "white"}} >Delete</button>

        {page === "editMovie" && <EditMovieComp movieid={movie._id} key={movie._id} />}
      </div>

      <div style={{ borderStyle : "solid" , borderColor : "MidnightBlue" , borderWidth : "5px" }}>
              <SubscribersComp movieid={movie._id} key={movie._id} />
      </div>
    </div>
    <br/>
    </div>
  );
}

export default MovieComp;