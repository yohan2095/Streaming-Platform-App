import MoviesComp from "./movies";
import SubscriptionsComp from "./subscriptions";
import UserManagementComp from "./usermanagement";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function MenuComp() {

    const history = useHistory();
    const [page, setPage] = useState("movies");
    
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

            <button onClick={() => setPage("movies")}>Movies</button>
            <button onClick={() => setPage("subscriptions")}>Subscriptions</button>
            <button onClick={() => setPage("usermanagement")}>User Management</button>
            <button onClick={logOut} style={{backgroundColor : "black"}}>Log Out</button>

            

            <div>
            {page === "movies" && <MoviesComp />}
            {page === "subscriptions" && <SubscriptionsComp />}
            {page === "usermanagement" && <UserManagementComp />}
            </div>
        </div>
    )
}

export default MenuComp;