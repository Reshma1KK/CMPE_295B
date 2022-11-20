import React from "react";
import './NavBar.css'

function NavBar(){
    return(
        <div className="navbar-home">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/" style={{color:"orange", fontWeight:"bolder"}}>TravelBuddy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Book your Tickets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Offers</a>
                    </li>
                    </ul>
                    <span>
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" className="navbar-logo"/>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;