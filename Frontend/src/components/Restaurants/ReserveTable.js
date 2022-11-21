import React, {useState,useEffect} from 'react';
import axios from "axios";
import {Card,Rating,Grid} from "@mui/material"
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NavBar from "../NavBar/NavBar"
import "./ReserveTable.css"
import Carousel from "../CustomComponents/Carousel"
import Reservation from "../Reservations/Reservation"
import Footer from '../Footer/Footer'
import ReviewsCard from '../CustomComponents/ReviewsCard'
import RestaurantCardDetails from '../CustomComponents/RestaurantDetailsCard'
import Location from '../CustomComponents/Location'

function ReserveTable(){

  const[restaurant,setRestaurant]=useState([]);

    useEffect(() => {
      bookTable();
    },[]);

  

    const bookTable = () =>{
        const name = localStorage.getItem("RestaurantName");
        console.log(name) 
        console.log(typeof(name))
      axios.get(`http://localhost:3001/restaurant/${name}`)
      .then((response) => {
        console.log(response.data[0])
        const request = response.data[0];
        setRestaurant(request);
    }).catch(error =>
    console.error("error:", error))
    }
    
    const ratingNumber = Number(restaurant.starRating)
    return (
        <>
            <NavBar/>
            <Grid container spacing={2} className="display-page" style={{padding:"20px"}}>
                <Grid item xs={6} md={12}>
                        <h3>{restaurant.restaurantName}</h3>
                </Grid>
                <Grid item xs={4} md={2} className="display-ele rating-container">
                    <div className="rating-child">
                    <Rating
                        value={ratingNumber}
                        precision={0.5}
                        max={5}
                        name="hover-feedback"
                        readOnly
                    />
                    </div>
                    <div className="rating-child">
                    <a style={{fontSize:"small", color:"blue", fontWeight:"bold", padding:"1em"}}>({restaurant.totalReviews})</a>
                    </div>
                </Grid>
                <Grid item xs={4} md={4} className="rating-container display-ele">
                    <div className="rating-child">
                        <BusinessIcon/>
                    </div>
                    <div className="rating-child" style={{fontWeight: "bold"}}>
                        {restaurant.address}
                    </div>

                </Grid>
                <Grid item xs={4} md={4} className="rating-container display-ele-last">
                <div className="rating-child">
                        <LocalPhoneIcon/>
                    </div>
                    <div className="rating-child" style={{fontWeight: "bold"}}>
                        {restaurant.phone}
                    </div>
                </Grid>
            </Grid>
            <Grid className="reservation-section-parent" container style={{padding:"40px", backgroundColor:"#f2f2f2", height: "500px"}}>
                <Card>
                    <Reservation/>
                </Card>
                <Card style={{width: "50%", marginLeft:"20px"}}>
                    <Carousel/>
                </Card>
            </Grid>
            <Grid className="reservation-section-parent" container style={{padding:"40px", backgroundColor:"#f2f2f2", height: "500px"}}>
                <Card style={{width:"400px"}}>
                    <ReviewsCard/>
                </Card>
                <Card style={{width:"400px", marginLeft:"20px"}}>
                    <RestaurantCardDetails/>
                </Card>
                <Card style={{width:"450px", marginLeft:"20px"}}>
                    <Location/>
                </Card>
            </Grid>
            <Footer/>
        </>
        )
      }




export default ReserveTable;