import React,{useState,useEffect} from 'react'
import {Grid,Rating} from '@mui/material'
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

const ReviewCard = () => {

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
      const foodNumber = Number(restaurant.foodRating)
      const serviceNumber = Number(restaurant.serviceRating)
      const valueNumber = Number(restaurant.valueRating)

    return (
        <div className="reservation-parent">
            <div className="reservation-child">
                <h5 style={{marginTop:"50px", fontWeight:"bold"}}>Ratings and Reviews</h5>
            </div>
                <Grid item xs={4} md={12} className="rating-container">
                    <div className="rating-child-review">
                            <p style={{fontWeight:"bold"}}>{ratingNumber}</p>
                    </div>
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
                        <a style={{fontSize:"small", color:"blue", fontWeight:"bold"}}>{restaurant.totalReviews} reviews</a>
                    </div>
                </Grid>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", gap:"20%"}}>
                    <p style={{fontWeight:"bold",width:"70px"}}>Food</p>
                    <Rating
                        value={foodNumber}
                        precision={0.5}
                        max={5}
                        name="hover-feedback"
                        readOnly
                    />
                </div>
                <div style={{display:"flex", gap:"20%"}}>
                    <p style={{fontWeight:"bold",width:"70px"}}>Value</p>
                    <Rating
                        value={valueNumber}
                        precision={0.5}
                        max={5}
                        name="hover-feedback"
                        readOnly
                    />
                </div>
                <div style={{display:"flex", gap:"20%"}}>
                    <p style={{fontWeight:"bold",width:"70px"}}>Service</p>
                    <Rating
                        value={serviceNumber}
                        precision={0.5}
                        max={5}
                        name="hover-feedback"
                        readOnly
                    />
                </div>
            </div>
            <div className="reservation-child">
            </div>
        </div>
    )
}

export default ReviewCard
