import { useEffect, useState } from "react";
import mvsrv from '../../services/moviesService';
import EditMovieComp from "./editMovie";
import axios from "axios";
import {Link} from 'react-router-dom';

function SearchResultComp() {

    const [page, setPage] = useState("movies");

    const [movie, setMovie] = useState({});

    useEffect(async () =>
    {
      let resp = await mvsrv.getMovie(resultID);
      setMovie(resp.data);
    }, [])

    const deleteMovie = async () =>
    {
        await axios.delete("http://localhost:8000/api/movies/"+ resultID);
        window.location.reload();
    }

    const resultID = sessionStorage.getItem("foundMID");

    return (
      <div className="App">
          <h3>Search Result</h3>
          <div className="App" style={{ borderStyle : "solid" , borderColor : "MidnightBlue" , borderWidth : "5px" }}>
        <h2><Link to={"/movie/" + movie._id} >{movie.name}, {movie.premiered}</Link> </h2>
        <h4>Genres : {movie.genres}</h4>

        <img src={movie.image} /> <br></br>

        <button onClick={() => setPage("editMovie")}>Edit</button>
        <button onClick={deleteMovie}>Delete</button>

        {page === "editMovie" && <EditMovieComp movieid={movie._id} key={movie._id} />}
      </div>
    
    <br/>
      </div>
    );
  }
  
  export default SearchResultComp;
  