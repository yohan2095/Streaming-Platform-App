import { useState } from "react";
import axios from 'axios';

function AddMovieComp() {

    const [movie, setMovie] = useState({name : '',genres : '', premiered : '', image : ''})


    const create = async (e) =>
        {
            e.preventDefault()
        
            if(movie.name != "")
            {
              let status = await axios.post("http://localhost:8000/api/movies/", movie);
              window.location.reload();
            }
        }
    
    
    const cancel = async () =>
        {
            window.location.reload();
        }


    return (
      <div className="App">
          <h3>Add Movie</h3>

          <form onSubmit={e => create(e)} >
            Name : <input type="text" onChange={e => setMovie({...movie, name :  e.target.value })} /><br/>
            Premiered : <input type="text" onChange={e => setMovie({...movie, premiered :  e.target.value })} /><br/>
            Genres : <input  type="text" onChange={e => setMovie({...movie, genres :  e.target.value })} /><br/>
            Image : <input type="text" onChange={e => setMovie({...movie, image :  e.target.value })} /><br/>
            
            <input type="submit" value="Update" style={{backgroundColor : "MidnightBlue", color : "white"}} />
            <button onClick={cancel}>Cancel</button>
        </form>

      </div>
    );
  }
  
  export default AddMovieComp;