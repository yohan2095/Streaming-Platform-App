import mbsrv from '../../services/membersService';
import { useEffect, useState } from "react";
import axios from 'axios';

function EditMemberComp(props) {

    const cancel = async () =>
    {
        window.location.reload();
    }
  
    const [member, setMember] = useState({name : '', email : '', city : ''})
 
    useEffect(async () =>
    {
    let resp = await mbsrv.getMember(props.memberid);
    setMember(resp.data);
    }, [])

    const update = async (e) =>
    {
        e.preventDefault()
    
        if(member.name !== "")
        {
          let status = await axios.put("http://localhost:8000/api/members/" + props.memberid, member);
          alert(status)
          window.location.reload();
        }
    }

    return (
      <div className="App">
        <h3>Edit Member</h3>

        <form onSubmit={e => update(e)} >
            Name : <input value={member.name} type="text" onChange={e => setMember({...member, name :  e.target.value })} /><br/>
            Email : <input value={member.email} type="text" onChange={e => setMember({...member, email :  e.target.value })} /><br/>
            City : <input value={member.city} type="text" onChange={e => setMember({...member, city :  e.target.value })} /><br/>
            
            <input type="submit" value="Update" style={{backgroundColor : "MidnightBlue", color : "white"}} />
            <button onClick={cancel}>Cancel</button>
        </form>
      </div>
    );
  }
  
  export default EditMemberComp;