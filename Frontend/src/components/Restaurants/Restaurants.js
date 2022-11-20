import React, {useEffect,useState} from "react";
import axios from "axios";
import NavBar from '../NavBar/NavBar.js';
import "./Restaurants.css"
import {Button,Rating,} from '@mui/material';
import {Link} from 'react-router-dom';


const Restaurants = () => {

    const [restaurants,setRestaurants] = useState([]);

    useEffect(() => {
        getAllCustomerData();
    },[]);

    const getAllCustomerData = () =>{
    axios.get("http://localhost:3001/getRestaurants",{
    })
    .then((response) => {
            console.log(response.data)
            const request = response.data;
            setRestaurants(request);
        }).catch(error =>
        console.error("error:", error)
    )
    }

    return (
        <div>
            <NavBar/>
            <h3 className="restaurant-header">Reserve a Table Online</h3>
            <div className="body-restaurant">
            {restaurants.map((restaurant) => (
                <div class = "__area text-center" style={{display:"inline-block"}}>
                <a href = "#" class = "__card">
                <button class = "__favorit"><i class = "la la-heart-o"></i></button>
                <img src = "https://i.pinimg.com/originals/74/84/4c/74844c4207ec819b6ffaa6291591311e.jpg" class="img-fluid __img"/>
                <Rating name="read-only" value={4.3} readOnly />
                    <div class = "__card_detail text-left">
                        <h4>{restaurant.restaurantName}</h4>
                        <p>
                        {restaurant.address}
                        </p>
                        <div class = "__type">
                            <span>{restaurant.cuisine}</span>
                            <span>{restaurant.dollarRating}</span>
                            <span>{restaurant.phone}</span>
                        </div>
                        <div class = "__detail">
                            <Link to="/ReserveTable">
                                <Button variant="contained" color="success" size="small" style={{border:"1px solid"}}>
                                    Find a table
                                </Button>
                            </Link>
                        </div>
                    </div>
                </a>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurants

