import React,{useState,useEffect} from 'react'
import "./Reservation.css"
import {Grid,Button,Alert} from '@mui/material'
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

const Reservation = () => {

    const [guests,setGuests]=useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [value,onChange]=useState('10:00')
    const [message,setMessage]=useState("");
    const [showAlert, setShowAlert]=useState(false)

    const handleChange = () =>{
        axios.post("http://localhost:3001/reserveTable",{
            guests:guests,
            date:startDate,
            time:value,
            id: localStorage.getItem("id"),
            restaurantName:localStorage.getItem("RestaurantName")
        })
        .then((response) => {
                setMessage("Reservation Successful!")
                setShowAlert(true)
            }).catch(error => {
                console.error("error:", error)
            }
    )}


    return (
        <div className="reservation-parent">
            <div className="reservation-child">
                <h5 style={{marginTop:"50px",fontWeight:"bold"}}>Reserve a table</h5>
            </div>
            <div className="reservation-sub-parent reservation-child">
                <Grid className="reservation-sub-child" item xs={4} md={2}>
                <h6>Guests</h6>
                    <select type="text"
                        className="form-control"
                        onChange={
                            (e)=>{
                                setGuests(e.target.value);
                            }}
                        >
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                        <option value="Four">Four</option>
                        <option value="Five">Five</option>
                        <option value="Six">Six</option>
                        <option value="Seven">Seven</option>
                        <option value="Eight">Eight</option>
                        <option value="Nine">Nine</option>
                        <option value="Ten">Ten</option>
                    </select>
                </Grid>
                <Grid className="reservation-sub-child" item xs={4} md={4}>
                    <h6>Date</h6>
                    <DatePicker 
                        className="form-control"
                        selected={startDate} 
                        onChange=
                        {(date:Date) => 
                        setStartDate(date)} 
                    />
                </Grid>
                <Grid className="reservation-sub-child" item xs={4} md={4}>
                <h6>Time</h6>
                    <TimePicker
                        className="form-control"
                        onChange={onChange}
                        value={value}
                    />
                 </Grid>
            </div>
            <div className="reservation-child">
               <Button variant="contained" color="success" style={{width:"75%", borderRadius:"12px", backgroundColor:"#f2b203", marginLeft:"50px"}} onClick={handleChange}>
                   Reserve table
               </Button>
               {console.log(showAlert)}
               { showAlert ? <Alert severity="success">{message}</Alert> : null}
            </div>
        </div>
    )
}

export default Reservation
