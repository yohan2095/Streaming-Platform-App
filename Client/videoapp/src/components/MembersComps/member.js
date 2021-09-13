import axios from "axios";
import { useEffect, useState } from "react";
import mbsrv from '../../services/membersService';
import WatchedMovieComp from "../SubscriptionsComps/watchedmovies";
import EditMemberComp from "./editMember";

function MemberComp(props) {

    const [page, setPage] = useState("members");
    const [member, setMember] = useState({});

    useEffect(async () =>
    {
      let resp = await mbsrv.getMember(props.memberid);
      setMember(resp.data);
    }, [])

    const deleteMember = async () =>
    {
        await axios.delete("http://localhost:8000/api/members/"+ props.memberid);
        window.location.reload();
    }


    return (
      <div className="App">
        <div className="App" style={{ borderStyle : "solid" , borderColor : "MidnightBlue" , borderWidth : "5px" }}>
            <h5>{member.name}</h5>
            Email : {member.email} <br/>
            City : {member.city} <br />
    
            <button onClick={() => setPage("editMember")}>Edit</button>
            <button onClick={deleteMember} style={{backgroundColor : "MidnightBlue", color : "white"}} >Delete</button>
    
            {page === "editMember" && <EditMemberComp memberid={member._id} key={member._id} />}

            <div>
              <WatchedMovieComp memberid={member._id} key={member._id} />
            </div>

            
        </div>
        <br/>
      </div>
    );
  }
  
  export default MemberComp;