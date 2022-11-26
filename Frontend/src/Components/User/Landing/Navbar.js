import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () =>{
    return(
  <>
  <div id = "nav-bar">
  <Link id = "nav-title" to={"/"}>Travelbuddy</Link>
  <button id = "nav-buttons"><Link to={"/signUp"} id="sign-in">Sign up</Link></button>
  <button id = "nav-buttons"><Link to={"/signIn"} id="sign-in">Sign in</Link></button>
  </div>
  </>

            );
            }

            export default Navbar;