import React, {useState} from "react";
import trip1  from "../../Images/trip1.jpg";

import './Landing.css'
import Navbar from "./Navbar.js";

const Landing = ()=>{

    return(
        <>
        <div id = "container">
            <Navbar/>
            <div id = "trip-image">
            <img src = {trip1} alt = "trip1" width="100%" height = "100%" id="landing-image"/>
            </div>
            
        </div></>
        
    );
    
}

export default Landing;