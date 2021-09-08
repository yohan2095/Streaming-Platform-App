import {useEffect, useState} from 'react';
import mvsrv from '../../services/moviesService';
import AddMovieComp from './addMovie';
import MovieComp from './movie';
import SearchResultComp from './searchResult';

function MoviesComp() {
    
    const [page, setPage] = useState("movies");

    const [movies, setMovies] = useState([])

    useEffect(async () =>
    {
        let resp = await mvsrv.getAllMovies();
        setMovies(resp.data);
    }, [])

    const findMovie = () =>
    {
        const searchInput = document.getElementById("searchInp").value;

        let noresult = 0;
        movies.forEach(name => {

            if(name.name === searchInput)
            {
                console.log("Found");
                console.log(name._id);
                const result = name._id;
                sessionStorage.setItem("foundMID", result);
            }
            else
            {
                noresult = noresult + 1;
            }
        });
        if(noresult === movies.length)
        {
            sessionStorage.setItem("foundMID", "No Result");
            alert("No Result");
        }

        
    }

    return (
        <div className="App">
            <h5>Movies</h5>

            <button onClick={() => setPage("movies")}>All Movies</button>
            <button onClick={() => setPage("addMovie")}>Add a Movie</button> &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Search" id="searchInp"></input>
            <button onClick={() => findMovie() + setPage("searchResult")}>Find</button> 
            {page === "movies"}
            {page === "addMovie" && <AddMovieComp />}
            {page === "searchResult" && <SearchResultComp />}
            <div className="App">
                {
                    movies.map(item =>
                    {
                        return <MovieComp movieid={item._id} key={item._id} />
                    })
                }
            </div>
        </div>
    )
}

export default MoviesComp;