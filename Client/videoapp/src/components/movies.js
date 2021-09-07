import {useEffect, useState} from 'react';
import mvsrv from '../services/moviesService';
import MovieComp from './movie';

function MoviesComp() {
    
    const [movies, setMovies] = useState([])

    useEffect(async () =>
    {
        let resp = await mvsrv.getAllMovies();
        setMovies(resp.data);
        console.log(resp.data);
    }, [])

    return (
        <div className="App">
            <h5>Movies</h5>

            <button>All Movies</button> 
            <button>Add Movie</button>
            Find Movie : <input type="text"></input>  <button>Find</button> 
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