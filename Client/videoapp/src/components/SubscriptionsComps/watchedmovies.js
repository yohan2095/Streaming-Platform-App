import sbsrv from '../../services/subscriptionsService';
import mvsrv from '../../services/moviesService';
import {useEffect, useState} from 'react';
import AddSubscriptionComp from './addSubscription';

function WatchedMovieComp(props) {

  const [subscriptions, setSubscriptions] = useState([]);

  const [movies, setMovies] = useState([]);

  const [watched, setWatched] = useState([]);

  const [page, setPage] = useState("member");

  
  
        useEffect(async () =>
        {
            let resp = await sbsrv.getAllSubscriptions();
            setSubscriptions(resp.data);

            let resp2 = await mvsrv.getAllMovies();
             setMovies([...resp2.data]);
        }, [])

        useEffect(async () =>
        {   
          showWatched();
        }, [movies])



        const showWatched = () =>
        {

          let arr = [];
          subscriptions.forEach(sub => {
            if(sub.memberID === props.memberid)
            {
              movies.forEach(mvi => {
                if(mvi._id === sub.movieID)
                {
                  arr.push(mvi.name + ", " + sub.date)
                }
              });
            }
          });
          setWatched(arr);
        }

  return (
  <div className="App">
        <h3>Watched Movies</h3>
        
      <ul>
        {
          watched.map(item =>
            {
              return <li>{item}</li>
            })
        }
      </ul>

      <button onClick={() => setPage("addSubscription")}>Subscribe to a new Movie</button>
    
      {page === "addSubscription" && <AddSubscriptionComp memberid={props.memberid} key={props.memberid} />}
    </div>
  );
}

export default WatchedMovieComp;