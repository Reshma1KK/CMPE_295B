import React from "react";
import './NavBar.css'
import {Button} from "@mui/material"
import { useNavigate } from 'react-router-dom';

function NavBar(){

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
          setOpen(false);
        }
      };

    const handleChange = () =>{
        localStorage.clear();
        setOpen(false);
        navigate('/signIn')

    }
    return(
        <div className="navbar-home">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/Landing" style={{color:"orange", fontWeight:"bolder"}}>TravelBuddy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/Landing">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Bookings">Bookings</a>
                        </li>
                    </ul>
                    <span style={{width: "100px", height:"auto"}}>
                    <div>
                        <Button onClick={handleClickOpen} style={{fontWeight:"bold"}} onClick={handleChange}>LogOut</Button>
                    </div>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;