import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Link} from "@mui/material"
import NavBar from "../NavBar/NavBar"
import { useNavigate } from 'react-router-dom';
import '../Restaurants/Restaurants.css'

function ThingsToDo(){

  const[thingsToDo,setThingsToDo]=useState([]);
  const storedLocation = localStorage.getItem("thingsToDoLocation").toLowerCase();
  const navigate = useNavigate();

    useEffect(() => {
      showThingsToDo();
    },[]);


    const showThingsToDo = () =>{
        axios.get("http://localhost:3001/getThingsToDo",{
        })
        .then((response) => {
                const request = response.data;
                setThingsToDo(request);
            }).catch(error =>
            console.error("error:", error)
    )}

    const reserveActivity = (name) =>{
        localStorage.setItem("activityName",name);
        navigate('/ReserveActivity')
    }


    return (
            <>
            <NavBar/>
            <div>
                <h6 className="restaurant-heading">Search results matching "{localStorage.getItem("location")}"</h6>
            </div>
            <div className="main-container">
            {thingsToDo.filter(function (things) {
                if(things.location.toLowerCase().includes(storedLocation)){
                    return true;
            }}).map(function (things) {
                return(
                <div className="main-parent">
                    <div className="restaurant-body">
                        <div className="child-body">
                            <img src = {things.image} className="restaurant-image"/>
                        </div>
                        <div className="child-body">
                            <Link to="/ReserveTable" onClick={()=>{reserveActivity(things.name)}}>
                            <h6 className="restaurant-name second">{things.name}</h6>
                            </Link>
                            <p><span style={{color:"green"}}>{things.duration} | {things.location}</span></p>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </>
        )
      }




export default ThingsToDo;