import { useState } from "react";
import axios from 'axios';

function AddMemberComp() {

    const [member, setMember] = useState({name : '', email : '', city : ''})

    const create = async (e) =>
        {
            e.preventDefault()
        
            if(member.name !== "")
            {
              let status = await axios.post("http://localhost:8000/api/members/", member);
            }
        }
    
    
    const cancel = async () =>
        {
            window.location.reload();
        }

    return (
      <div className="App">
        <h3>Add Member</h3>

        <form onSubmit={e => create(e)} >
            Name : <input type="text" onChange={e => setMember({...member, name :  e.target.value })} /><br/>
            Email : <input type="text" onChange={e => setMember({...member, email :  e.target.value })} /><br/>
            City : <input  type="text" onChange={e => setMember({...member, city :  e.target.value })} /><br/>
            
            <input type="submit" onClick={cancel} value="Update" style={{backgroundColor : "MidnightBlue", color : "white"}} />
            <button onClick={cancel}>Cancel</button>
        </form>

      </div>
    );
  }
  
  export default AddMemberComp;