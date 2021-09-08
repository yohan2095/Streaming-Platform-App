import { useEffect, useState } from "react";
import mvsrv from '../../services/moviesService';
import axios from 'axios';

function EditMovieComp(props) {

    const cancel = async () =>
    {
        window.location.reload();
    }
  
    const [movie, setMovie] = useState({name : '', genres : '', premiered : '', image : ''})
 
    useEffect(async () =>
    {
    let resp = await mvsrv.getMovie(props.movieid);
    setMovie(resp.data);
    }, [])

    const update = async (e) =>
    {
        e.preventDefault()
    
        if(movie.name != "")
        {
          let status = await axios.put("http://localhost:8000/api/movies/" + props.movieid, movie);
          window.location.reload();
        }
    }

    return (
      <div className="App">
        <h3>Edit Movie</h3>

        <form onSubmit={e => update(e)} >
            Name : <input value={movie.name} type="text" onChange={e => setMovie({...movie, name :  e.target.value })} /><br/>
            Premiered : <input value={movie.premiered} type="text" onChange={e => setMovie({...movie, premiered :  e.target.value })} /><br/>
            Genres : <input value={movie.genres} type="text" onChange={e => setMovie({...movie, genres :  e.target.value })} /><br/>
            Image : <input value={movie.image} type="text" onChange={e => setMovie({...movie, image :  e.target.value })} /><br/>
            
            <input type="submit" value="Update" style={{backgroundColor : "MidnightBlue", color : "white"}} />
            <button onClick={cancel}>Cancel</button>
        </form>

        

      </div>
    );
  }
  
export default EditMovieComp;