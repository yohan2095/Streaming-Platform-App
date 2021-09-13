import MoviesComp from "./MoviesComps/movies";
import MembersComp from "./MembersComps/members";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function MenuComp() {

    const history = useHistory();
    const [page, setPage] = useState("./MoviesComps/movies");
    
    const username = sessionStorage.getItem("fullname");

    const logOut = () =>
    {
        sessionStorage.setItem("fullname", "");
        history.push('/')
    }
    
    return (
        <div className="App">
            <h5>Hello {username}</h5>
            <h3>Menu</h3>

            <button onClick={() => setPage("./MoviesComps/movies")}>Movies</button>
            <button onClick={() => setPage("./MembersComps/members")}>Subscriptions</button>
            <button onClick={logOut} style={{backgroundColor : "MidnightBlue", color : "white"}}>Log Out</button>

        
            <div>
            {page === "./MoviesComps/movies" && <MoviesComp />}
            {page === "./MembersComps/members" && <MembersComp />}
            </div>
        </div>
    )
}

export default MenuComp;