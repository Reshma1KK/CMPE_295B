import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Button,Rating,Link} from "@mui/material"
import NavBar from "../NavBar/NavBar"
import Footer from '../User/Footer/footer'
import { useNavigate } from 'react-router-dom';

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
        <div>
        <NavBar/>
        <h4 className="restaurant-header">PLACES NEARBY {storedLocation.toUpperCase()}</h4>
        <div className="body-restaurant">
        {thingsToDo.filter(function (things) {
            console.log("talk to me")
            console.log(things.location.toLowerCase().includes(storedLocation))
            if(things.location.toLowerCase().includes(storedLocation)){
                return true;
        }}).map(function (things) {
            return(
            <div class = "__area text-center" style={{display:"inline-block"}}>
            <a href = "#" class = "__card">
            <button class = "__favorit"><i class = "la la-heart-o"></i></button>
            <img src = "https://i.pinimg.com/originals/74/84/4c/74844c4207ec819b6ffaa6291591311e.jpg" class="img-fluid __img"/>
            <Rating name="read-only" value={things.reviews} readOnly />
                <div class = "__card_detail text-left">
                    <h4>{things.name}</h4>
                    <div class = "__detail">
                        <Link to="/ReserveTable">
                            <Button variant="contained" color="success" size="small" style={{border:"1px solid"}} onClick={()=>{reserveActivity(things.name)}}>
                                Check Location
                            </Button>
                        </Link>
                    </div>
                </div>
            </a>
            </div>
            )
        })}
        </div>
        <Footer/>
        </div>
        )
      }




export default ThingsToDo;