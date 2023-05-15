import { Link, Outlet } from "react-router-dom";

function Navbar () {
    return (
        <div className="navbar">
             <Link to="/dashboard/tournaments">Tournaments</Link>
              
            <Link to="/dashboard/chat">chat</Link>
           
        </div>
    )
}

export default Navbar;