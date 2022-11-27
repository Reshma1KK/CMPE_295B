import React, {useEffect,useState} from "react";
import axios from "axios";
import NavBar from '../NavBar/NavBar.js';
import "./Restaurants.css"
import {Card} from '@mui/material';
import {Link} from 'react-router-dom';
import footer from '../User/Footer/footer'


const Restaurants = () => {

    const [restaurants,setRestaurants] = useState([]);
    const storedLocation = localStorage.getItem("location").toLowerCase();

    useEffect(() => {
        getRestaurants();
    },[]);

    const getRestaurants = () =>{
        axios.get("http://localhost:3001/getRestaurants",{
        })
        .then((response) => {
                const request = response.data;
                setRestaurants(request);
            }).catch(error =>
            console.error("error:", error)
    )}

    function reserveTable(id,name){
        localStorage.setItem("RestaurantName",name)
        localStorage.setItem("RestaurantId",id);
        window.open("/ReserveTable","_self");
  
    };

    return (
        <>
            <NavBar/>
            <div>
                <h6 className="restaurant-heading">Search results matching "{localStorage.getItem("location")}"</h6>
            </div>
            <div className="main-container">
            {restaurants.filter(function (restaurant) {
                if(restaurant.location.toLowerCase().includes(storedLocation)){
                    return true;
            }}).map(function (restaurant) {
                return(
                <div className="main-parent">
                     <div className="restaurant-body">
                        <div className="child-body">
                            <img src = {restaurant.main_image} className="restaurant-image"/>
                        </div>
                        <div className="child-body">
                            <Link to="/ReserveTable" onClick={()=>{reserveTable(restaurant._id,restaurant.restaurantName)}}>
                            <h6 className="restaurant-name second">{restaurant.restaurantName}</h6>
                            </Link>
                            <p><span style={{color:"green"}}>{restaurant.cuisine} | {restaurant.dollarRating}</span></p>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </>
    )
}

export default Restaurants

