import React from 'react'
import {Link} from "react-router-dom"
import "../assets/css/header.css"
import searchicon from "../assets/images/searchicon.png";

const Header = () => {
    return (
        <header>
            <div className="headercontainer">
                    <nav>
                        <ul>
                        <li>VUDU</li>
                <li><Link to="/">HOME</Link></li>
                <li ><Link to="/MovieAllList">Movie</Link></li>
                <li ><Link to="/TvShowAllList">TV</Link></li>
                <li ><Link to="/Login">Login</Link></li>
                <li><Link to="/Registration">Registration</Link></li>
                <li><img src={searchicon} alt="" height="30px" width="5px" /></li>
                

            
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default Header
