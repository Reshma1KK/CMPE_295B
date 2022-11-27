import React,{useState,useEffect} from 'react'
import { Card,Grid } from '@mui/material';
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import './Bookings.css'
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const Bookings = () => {

    const[flights,setFlights]=useState([])
    const[hotels,setHotels]=useState([])
    const[tables,setTables]=useState([])

    useEffect(() => {
        getFlightData();
        getHotelData();
        getTableData();
      },[]);
  
      const getFlightData = () =>{
        const id = localStorage.getItem("id");
        axios.get(`http://localhost:3001/retrieveFlightBookings/${id}`)
        .then((response) => {
          console.log(response.data)
          const request = response.data;
          setFlights(request);
      }).catch(error =>
      console.error("error:", error))
      }

      const getHotelData = () =>{
        const id = localStorage.getItem("id");
      axios.get(`http://localhost:3001/retrieveHotelBookings/${id}`)
      .then((response) => {
        console.log(response.data)
        const request = response.data;
        setHotels(request);
    }).catch(error =>
    console.error("error:", error))
    }

    const getTableData = () =>{
        const id = localStorage.getItem("id");
      axios.get(`http://localhost:3001/retrieveTableBookings/${id}`)
      .then((response) => {
        console.log(response.data)
        const request = response.data;
        setTables(request);
    }).catch(error =>
    console.error("error:", error))
    }
  

    return (
        <div className="bookings">
          <NavBar/>
            {flights.map(function(flight){
              return(
                <div>
                  <Card className="containers">
                    <div className="parent-reciept">
                      <h6 className="parent-child">Flight Bookings</h6>
                      <div className="parent-child heading"><FlightIcon/></div>
                    </div>
                    <div className="parent-reciept-one">
                      <h6 className="reciept-body">FROM: <span className="bookings-span">{flight.Start}</span></h6>
                      <h6 className="reciept-body">TO: <span className="bookings-span">{flight.Dest}</span></h6>
                      <h6 className="reciept-body">DEPART: <span className="bookings-span">{flight.Time}</span></h6>
                      <h6 className="reciept-body">RETURN: <span className="bookings-span">{flight.Return}</span></h6>
                      <h6 className="reciept-body">RATE: <span className="bookings-span">${flight.Rate}</span></h6>
                    </div>
                  </Card>
                </div>
              )
            })}
             {hotels.map(function(hotel){
              return(
                <div>
                  <Card className="containers">
                    <div className="parent-reciept">
                      <h6 className="parent-child heading">Hotel Bookings</h6>
                      <div className="parent-child"><HotelIcon/></div>
                    </div>
                    <div className="parent-reciept-one">
                      <h6 className="reciept-body">HOTEL: <span className="bookings-span">{hotel.Name}</span></h6>
                      <h6 className="reciept-body">FROM: <span className="bookings-span">{hotel.Start}</span></h6>
                      <h6 className="reciept-body">TO: <span className="bookings-span">{hotel.End}</span></h6>
                      <h6 className="reciept-body">RATE: <span className="bookings-span">${hotel.Rate}</span></h6>
                    </div>
                  </Card>
                </div>
              )
            })}
             {tables.map(function(table){
              return(
                <div>
                  <Card className="containers">
                    <div className="parent-reciept">
                      <h6 className="parent-child heading">Table Reservation</h6>
                      <div className="parent-child"><DinnerDiningIcon/></div>
                    </div>
                    <div className="parent-reciept-one">
                      <h6 className="reciept-body">RESTAURANT: <span className="bookings-span">{table.restaurantName}</span></h6>
                      <h6 className="reciept-body">GUESTS: <span className="bookings-span">{table.guests}</span></h6>
                      <h6 className="reciept-body">DATE: <span className="bookings-span">{table.date}</span></h6>
                      <h6 className="reciept-body">TIME: <span className="bookings-span">{table.time}</span></h6>
                    </div>
                  </Card>
                </div>
              )
            })}
        </div>
    )
}

export default Bookings
