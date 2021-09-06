

function MenuComp() {

    
    const username = sessionStorage.getItem("fullname");
    return (
        <div className="App">
            <h5>Hello {username}</h5>
            <h3>Menu</h3>
            <button>Movies</button>
            <button>Subscription</button>
            <button>Users Management</button>
            <button>Logout</button>
        </div>
    )
}

export default MenuComp;