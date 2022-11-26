import React, {useState} from 'react';
import Footer from '../Footer/footer';
import './bookFlight.css';
import ConfirmModel from '../BookHotel/ConfirmModel';
import Axios from 'axios';
import Navbar from '../../NavBar/NavBar' 

const BookFlight = ()=>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [DOB,setDOB] = useState("");
    const [gender,setGender] = useState("");
    const[isOpen, setIsOpen] = useState(false);
    
    var depart = JSON.stringify(localStorage.getItem('depart'))
    var arrival = JSON.stringify(localStorage.getItem('depart'))
    var count = parseInt(localStorage.getItem('adult'))+ parseInt(localStorage.getItem('children'))
    depart = depart.slice(1,16)
    arrival = arrival.slice(1,16)

    function bookFlight(){
        setIsOpen(true);
        Axios.post("http://localhost:3001/bookFlight",
    {userId:localStorage.getItem('id'), start:localStorage.getItem('start'), dest:localStorage.getItem('dest'),
    time:depart, return: arrival, rate:(count * parseInt(localStorage.getItem('rate'))+20.97), 
    count: count
    }).then((response)=>{
      console.log("details entered")
     });
    }

    if (localStorage.getItem('type') == 'round'){
        return(
            <><Navbar/><div id="bookFlights-home">
                <div id="bookFlights-home-part1">
                    <h2>Traveller Details</h2>
                    <input type="text" placeholder='First name'id = "userdetails-el" required onChange={(e)=>{
                        setFirstName(e.target.value); }}></input>
                    <input type="text" placeholder='Last name'id = "userdetails-el" required onChange={(e)=>{
                        setLastName(e.target.value); }}></input>
                        <input type="date" placeholder="YYYY-MM-DD"  onChange={(e)=>{
                        setDOB(e.target.value); }}
                            id="userdetails-el" name ="DOB" required/>
                    <select type="text" id="userdetails-el" onChange={(e)=>{
                        setGender(e.target.value); }}>
                            <option value="">--Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    
                </div>
                <div id="bookFlights-home-part2">
                <h2>Flight Details</h2>
                <h4>Economy Class</h4>
                <p>{localStorage.getItem('adult')} Adult, {localStorage.getItem('children')} Children</p>
                <p>{localStorage.getItem('start')} to {localStorage.getItem('dest')} </p>
                <p style={{color:"gray"}}>{depart}</p>
                <p> {localStorage.getItem('dest')} to {localStorage.getItem('start')} </p>
                <p style={{color:"gray"}}>{arrival}</p>
                <p>Fare: ${count * parseInt(localStorage.getItem('rate'))}</p>
                <p>Taxes and Fees: $20.97</p>
                <h3>Total Due: ${(count * parseInt(localStorage.getItem('rate'))+20.97)}</h3>
                <button id = "checkout-el" onClick={bookFlight}>Book Now</button>
                <ConfirmModel open={isOpen} onClose={() => setIsOpen(false)} />
                </div>
    
            </div><Footer /></>
        )
    }
    else{
        return(
            <><Navbar/><div id="bookFlights-home">
                <div id="bookFlights-home-part1">
                    <h2>Traveller Details</h2>
                    <input type="text" placeholder='First name'id = "userdetails-el" required onChange={(e)=>{
                        setFirstName(e.target.value); }}></input>
                    <input type="text" placeholder='Last name'id = "userdetails-el" required onChange={(e)=>{
                        setLastName(e.target.value); }}></input>
                        <input type="date" placeholder="YYYY-MM-DD"  onChange={(e)=>{
                        setDOB(e.target.value); }}
                            id="userdetails-el" name ="DOB" required/>
                    <select type="text" id="userdetails-el" onChange={(e)=>{
                        setGender(e.target.value); }}>
                            <option value="">--Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    
                </div>
                <div id="bookFlights-home-part2">
                <h2>Flight Details</h2>
                <h4>Economy Class</h4>
                <p>{localStorage.getItem('adult')} Adult, {localStorage.getItem('children')} Children</p>
                <p>{localStorage.getItem('start')} to {localStorage.getItem('dest')} </p>
                <p style={{color:"gray"}}>{depart}</p>
                <p>Fare: ${count * parseInt(localStorage.getItem('rate'))}</p>
                <p>Taxes and Fees: $20.97</p>
                <h3>Total Due: ${(count * parseInt(localStorage.getItem('rate'))+20.97)}</h3>
                <button id = "checkout-el" onClick={bookFlight}>Book Now</button>
                <ConfirmModel open={isOpen} onClose={() => setIsOpen(false)} />
                </div>
    
            </div><Footer /></>
        )
    }

    
}

export default BookFlight
