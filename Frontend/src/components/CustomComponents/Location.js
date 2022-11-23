import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

const Location = () => {

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

    return (
        <div className="reservation-parent">
            <div className="reservation-child">
            <h5 style={{marginTop:"50px", fontWeight:"bold"}}>Location</h5>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <p style={{width:"100%", fontSize:"small", fontWeight: "bold"}}>Address</p>
                    <p style={{width:"100%", fontSize:"small"}}>{restaurant.address}</p>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <p style={{width:"100%", fontSize:"small", fontWeight: "bold"}}>Phone</p>
                    <p style={{width:"100%", fontSize:"small"}}>{restaurant.phone}</p>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <p style={{width:"100%", fontSize:"small", fontWeight: "bold"}}>Location</p>
                    <p style={{width:"100%", fontSize:"small"}}>{restaurant.location}</p>
                </div>
            </div>
            <div className="reservation-child">
            </div>
        </div>
    )
}

export default Location
