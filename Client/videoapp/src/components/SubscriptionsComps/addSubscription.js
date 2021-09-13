import sbsrv from '../../services/subscriptionsService';
import mvsrv from '../../services/moviesService';
import {useEffect, useState} from 'react';
import axios from 'axios';

function AddSubscriptionComp(props) {

    const [subscriptions, setSubscriptions] = useState([]);

    const [movies, setMovies] = useState([]);

    const [subscription, setSubscription] = useState({movieID : '', memberID : props.memberid, date : ''})


    useEffect(async () =>
        {
            let resp = await sbsrv.getAllSubscriptions();
            setSubscriptions(resp.data);

            let resp2 = await mvsrv.getAllMovies();
             setMovies([...resp2.data]);
        }, [])

    const create = async (e) =>
        {
            e.preventDefault()
            console.log(subscription)
        
            if(movies.name !== "")
            {
              let status = await axios.post("http://localhost:8000/api/subscriptions/", subscription);
              console.log(status)
              
            }
        }


    return (
      <div className="App">
          <h4>Add a new movie</h4>

          <form>

          <select onChange={e => setSubscription({...subscription, movieID :  e.target.value })}>
              {
                  movies.map(item =>
                    {
                        return <option value={item._id} >{item.name}</option>
                    })
              }
          </select>

          <input type="date" onChange={e => setSubscription({...subscription, date :  e.target.value })}></input>

          <input onClick={create} type="submit" value="Update" style={{backgroundColor : "MidnightBlue", color : "white"}} />


          </form>

      </div>
    );
  }
  
  export default AddSubscriptionComp;