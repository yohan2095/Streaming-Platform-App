import { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function LoginComp() {

    const [login, setLogin] = useState({username:'', password : ''})
    const history = useHistory();

    const LogIn = () =>
    {
      axios.post("http://localhost:8000/api/auth/login", login).then(resp =>
      {
        console.log(resp.data);
        sessionStorage.setItem("fullname", resp.data);
        console.log(sessionStorage.getItem("fullname"));
        if(sessionStorage.getItem("fullname") == "Unauthorized")
        {
          alert("Username or Password is wrong")
        }
        else
        {
          history.push('/menu')
        }
      })
    }
    

  return (
    <div className="App">
      <h3>Login Page</h3>
      User Name : <input type="text" onChange={e => setLogin({...login, username : e.target.value})}></input> <br></br>
      Password : <input type="text" onChange={e => setLogin({...login, password : e.target.value})}></input> <br></br>
      <button value="Login" onClick={LogIn}>Login</button>
    </div>
  );
}

export default LoginComp;
