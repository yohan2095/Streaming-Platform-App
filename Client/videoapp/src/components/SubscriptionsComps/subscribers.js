import { useEffect, useState } from "react";
import sbsrv from '../../services/subscriptionsService';
import mbsrv from '../../services/membersService';

function SubscribersComp(props) {

    const [subscriber, setSubscribers] = useState([]);
    const [members, setMembers] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(async () =>
        {
            let resp = await sbsrv.getAllSubscriptions();
            setSubscriptions(resp.data);

            let resp2 = await mbsrv.getAllMembers();
             setMembers([...resp2.data]);
        }, [])

    useEffect(async () =>
        {   
          showSubscribers();
        }, [members])    

        const showSubscribers = () =>
        {
          let arr = [];
          subscriptions.forEach(sub => {
            if(sub.movieID === props.movieid)
            {
              members.forEach(mmb => {
                if(mmb._id === sub.memberID)
                {
                  arr.push(mmb.name + ", " + sub.date)
                }
              });
            }
          });
          setSubscribers(arr);
        }

    return (
      <div className="App">

      <h3>Subscriptions Watched</h3>

      <ul>
        {
          subscriber.map(item =>
            {
              return <li>{item}</li>
            })
        }
      </ul>

      </div>
    );
  }
  
  export default SubscribersComp;